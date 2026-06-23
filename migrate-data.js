// One-time migration script to load existing Airbnb data into Firebase
import { db } from './firebase-config.js';
import { collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';
import { parseAirbnbPayments, parseAirbnbGuests } from './csv-parsers/airbnb-parser.js';
import { promises as fs } from 'fs';

async function migrateAirbnbData() {
  console.log('🌵 Starting Airbnb data migration...');

  try {
    // Read payment_processing.json
    const paymentPath = '/Users/etuan/Desktop/Airbnb/Airbnb_data_request_10Jan2026_GMT/json/payment_processing.json';
    console.log('📖 Reading payment_processing.json...');
    const paymentText = await fs.readFile(paymentPath, 'utf-8');
    const paymentData = JSON.parse(paymentText);

    // Parse payments
    console.log('⚙️ Parsing Airbnb payments...');
    const payments = parseAirbnbPayments(paymentData);
    console.log(`✅ Parsed ${payments.length} payments`);

    // Check if we already have data in Firebase
    const existingRevenue = await getDocs(collection(db, 'revenue'));
    if (existingRevenue.size > 0) {
      console.log(`⚠️ Found ${existingRevenue.size} existing revenue records in Firebase`);
      const proceed = confirm('Firebase already has revenue data. Do you want to add more records?');
      if (!proceed) {
        console.log('❌ Migration cancelled');
        return;
      }
    }

    // Upload to Firebase
    console.log('📤 Uploading to Firebase...');
    let uploadCount = 0;

    for (const payment of payments) {
      await addDoc(collection(db, 'revenue'), {
        ...payment,
        propertyId: 'cochran', // Default to Cozy Cactus - we can categorize later
        importDate: new Date()
      });
      uploadCount++;

      // Progress update every 50 records
      if (uploadCount % 50 === 0) {
        console.log(`  📊 Uploaded ${uploadCount}/${payments.length} payments...`);
      }
    }

    console.log(`✅ Successfully uploaded ${uploadCount} payment records!`);

    // Try to parse reservations for guest data
    try {
      const reservationPath = '/Users/etuan/Desktop/Airbnb/Airbnb_data_request_10Jan2026_GMT/json/reservations.json';
      console.log('📖 Reading reservations.json...');
      const reservationText = await fs.readFile(reservationPath, 'utf-8');
      const reservationData = JSON.parse(reservationText);

      console.log('⚙️ Parsing guest data...');
      const guests = parseAirbnbGuests(reservationData);
      console.log(`✅ Parsed ${guests.length} unique guests`);

      // Upload guests
      console.log('📤 Uploading guest data...');
      for (const guest of guests) {
        await addDoc(collection(db, 'guests'), {
          ...guest,
          importDate: new Date()
        });
      }
      console.log(`✅ Successfully uploaded ${guests.length} guest records!`);

    } catch (error) {
      console.log('⚠️ Could not parse guest data:', error.message);
    }

    console.log('🎉 Migration complete! Your dashboard is now populated with data.');

  } catch (error) {
    console.error('❌ Migration error:', error);
    throw error;
  }
}

// Run migration
console.log('🌵 Desert Edit Dashboard - Data Migration Tool');
console.log('================================================\n');

migrateAirbnbData()
  .then(() => {
    console.log('\n✨ All done! Refresh your dashboard to see the data.');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
