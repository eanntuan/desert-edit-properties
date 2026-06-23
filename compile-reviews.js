// Compile all guest reviews from Airbnb data export
import fs from 'fs';

const reviewsPath = '/Users/etuan/Desktop/Airbnb/Airbnb_data_request_10Jan2026_GMT/json/reviews.json';
const listingsPath = '/Users/etuan/Desktop/Airbnb/Airbnb_data_request_10Jan2026_GMT/json/listings.json';

console.log('📝 Compiling Guest Reviews from Airbnb Data Export\n');
console.log('='.repeat(80) + '\n');

try {
  // Load reviews data
  const reviewsData = JSON.parse(fs.readFileSync(reviewsPath, 'utf8'));
  
  // Load listings to map property IDs to names
  const listingsData = JSON.parse(fs.readFileSync(listingsPath, 'utf8'));
  
  // Create a map of listing IDs to property names
  const listingMap = {};
  listingsData.forEach(listing => {
    if (listing.listing) {
      listingMap[listing.listing.id] = {
        name: listing.listing.name || 'Unknown Property',
        address: listing.listing.publicAddress || ''
      };
    }
  });

  // Process reviews
  let totalReviews = 0;
  let totalRating = 0;
  const reviewsByProperty = {};

  reviewsData.forEach(reviewGroup => {
    if (reviewGroup.reviewsReceived) {
      reviewGroup.reviewsReceived.forEach(reviewItem => {
        const review = reviewItem.review;
        
        if (!review || !review.hasSubmitted) return;

        totalReviews++;
        totalRating += review.rating || 0;

        // Get property info
        const propertyId = review.bookableId || review.entityId;
        const property = listingMap[propertyId] || { name: 'Unknown Property', address: '' };

        // Initialize property array if doesn't exist
        if (!reviewsByProperty[property.name]) {
          reviewsByProperty[property.name] = [];
        }

        // Extract category ratings
        const categoryRatings = {};
        if (reviewItem.reviewCategoryRatings) {
          reviewItem.reviewCategoryRatings.forEach(cat => {
            categoryRatings[cat.ratingCategory] = cat.ratingV2;
          });
        }

        // Parse date
        const reviewDate = new Date(review.submittedAt || review.createdAt);

        reviewsByProperty[property.name].push({
          date: reviewDate,
          rating: review.rating,
          comment: review.comment || '',
          privateFeedback: review.privateFeedback || '',
          categoryRatings: categoryRatings,
          isGroupTravel: review.isGroupTravel,
          isBusinessTravel: review.isBusinessTravel
        });
      });
    }
  });

  // Display summary
  console.log('📊 REVIEW SUMMARY');
  console.log('-'.repeat(80));
  console.log(`Total Reviews: ${totalReviews}`);
  console.log(`Average Rating: ${(totalRating / totalReviews).toFixed(2)} ⭐`);
  console.log(`Properties with Reviews: ${Object.keys(reviewsByProperty).length}\n`);

  // Display reviews by property
  for (const [propertyName, reviews] of Object.entries(reviewsByProperty)) {
    console.log('\n' + '='.repeat(80));
    console.log(`🏠 ${propertyName.toUpperCase()}`);
    console.log('='.repeat(80));
    console.log(`Total Reviews: ${reviews.length}`);
    
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    console.log(`Average Rating: ${avgRating.toFixed(2)} ⭐\n`);

    // Sort by date (newest first)
    reviews.sort((a, b) => b.date - a.date);

    reviews.forEach((review, index) => {
      console.log(`\n${'─'.repeat(80)}`);
      console.log(`Review #${index + 1} | ${review.date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })} | ${review.rating} ⭐`);
      
      if (review.isGroupTravel) console.log('👥 Group Travel');
      if (review.isBusinessTravel) console.log('💼 Business Travel');
      
      console.log(`\n📝 PUBLIC REVIEW:`);
      console.log(review.comment || '(No public comment)');

      // Category ratings
      if (Object.keys(review.categoryRatings).length > 0) {
        console.log(`\n⭐ CATEGORY RATINGS:`);
        for (const [category, rating] of Object.entries(review.categoryRatings)) {
          const stars = '⭐'.repeat(rating);
          console.log(`   ${category}: ${stars} (${rating}/5)`);
        }
      }

      if (review.privateFeedback) {
        console.log(`\n🔒 PRIVATE FEEDBACK (Host-Only):`);
        console.log(review.privateFeedback);
      }
    });

    console.log('\n' + '─'.repeat(80));
  }

  // Save to file
  const outputPath = '/Users/etuan/Desktop/Airbnb/desert-edit-deploy/all-reviews-compiled.txt';
  const outputContent = generateTextReport(reviewsByProperty, totalReviews, totalRating);
  fs.writeFileSync(outputPath, outputContent, 'utf8');
  
  console.log('\n\n✅ Reviews compiled successfully!');
  console.log(`📄 Full report saved to: ${outputPath}\n`);

} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

function generateTextReport(reviewsByProperty, totalReviews, totalRating) {
  let report = '';
  
  report += '═'.repeat(80) + '\n';
  report += '          COZY CACTUS - GUEST REVIEWS COMPILATION\n';
  report += '═'.repeat(80) + '\n\n';
  
  report += `Generated: ${new Date().toLocaleString()}\n`;
  report += `Total Reviews: ${totalReviews}\n`;
  report += `Average Rating: ${(totalRating / totalReviews).toFixed(2)} ⭐\n\n`;

  for (const [propertyName, reviews] of Object.entries(reviewsByProperty)) {
    report += '\n' + '═'.repeat(80) + '\n';
    report += `🏠 ${propertyName.toUpperCase()}\n`;
    report += '═'.repeat(80) + '\n';
    report += `Total Reviews: ${reviews.length}\n`;
    
    const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
    report += `Average Rating: ${avgRating.toFixed(2)} ⭐\n\n`;

    reviews.forEach((review, index) => {
      report += `\n${'─'.repeat(80)}\n`;
      report += `Review #${index + 1} | ${review.date.toLocaleDateString()} | ${review.rating} ⭐\n`;
      
      if (review.isGroupTravel) report += '👥 Group Travel\n';
      if (review.isBusinessTravel) report += '💼 Business Travel\n';
      
      report += `\n📝 PUBLIC REVIEW:\n`;
      report += review.comment + '\n';

      if (Object.keys(review.categoryRatings).length > 0) {
        report += `\n⭐ CATEGORY RATINGS:\n`;
        for (const [category, rating] of Object.entries(review.categoryRatings)) {
          report += `   ${category}: ${'★'.repeat(rating)}${'☆'.repeat(5-rating)} (${rating}/5)\n`;
        }
      }

      if (review.privateFeedback) {
        report += `\n🔒 PRIVATE FEEDBACK:\n`;
        report += review.privateFeedback + '\n';
      }
    });
  }

  return report;
}
