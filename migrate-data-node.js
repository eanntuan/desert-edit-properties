// Node.js migration script to load existing Airbnb data into Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { readFileSync } from 'fs';

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCh9K9YewO1U4RLXGm_l9NUc-TDiqqW7UU",
  authDomain: "the-desert-edit.firebaseapp.com",
  projectId: "the-desert-edit",
  storageBucket: "the-desert-edit.firebasestorage.app",
  messagingSenderId: "908153205708",
  appId: "1:908153205708:web:a02fc89fb3f361e7c4e369"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Parse Airbnb date format (YYMMDD) to JavaScript Date
function parseAirbnbDate(dateStr) {
  if (!dateStr || dateStr.length !== 6) {
    return new Date();
  }

  const year = parseInt('20' + dateStr.substring(0, 2));
  const month = parseInt(dateStr.substring(2, 4)) - 1;
  const day = parseInt(dateStr.substring(4, 6));

  return new Date(year, month, day);
}

// Parse Airbnb payments
function parseAirbnbPayments(jsonData) {
  const payments = [];

  if (!Array.isArray(jsonData)) {
    console.error('payment_processing.json should be an array');
    return payments;
  }

  jsonData.forEach(record => {
    if (record.transactionDetails && Array.isArray(record.transactionDetails)) {
      record.transactionDetails.forEach(transaction => {
        if (transaction.amountMicros && transaction.currency === 'USD') {
          const amount = transaction.amountMicros / 1000000;

          let date = new Date();
          if (transaction.additionalAttributes?.effectiveEntryDate) {
            date = parseAirbnbDate(transaction.additionalAttributes.effectiveEntryDate);
          }

          if (amount > 0) {
            payments.push({
              date: date,
              amount: amount,
              confirmationCode: transaction.additionalAttributes?.companyEntryDescription || '',
              source: 'Airbnb',
              grossAmount: amount,
              netIncome: amount,
              description: `Airbnb payout - ${transaction.additionalAttributes?.companyEntryDescription || 'N/A'}`
            });
          }
        }
      });
    }
  });

  return payments;
}

async function migrateData() {
  console.log('🌵 Desert Edit Dashboard - Data Migration');
  console.log('=========================================\n');

  try {
    // Check existing data
    console.log('🔍 Checking for existing data in Firebase...');
    const existingRevenue = await getDocs(collection(db, 'revenue'));

    if (existingRevenue.size > 0) {
      console.log(`⚠️  Found ${existingRevenue.size} existing revenue records`);
      console.log('⚠️  This script will ADD to existing data (not replace it)');
      console.log('⚠️  Press Ctrl+C now to cancel, or wait 5 seconds to continue...\n');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }

    // Read and parse payment data
    console.log('📖 Reading payment_processing.json...');
    const paymentPath = '/Users/etuan/Desktop/Airbnb/Airbnb_data_request_10Jan2026_GMT/json/payment_processing.json';
    const paymentText = readFileSync(paymentPath, 'utf-8');
    const paymentData = JSON.parse(paymentText);

    console.log('⚙️  Parsing Airbnb payments...');
    const payments = parseAirbnbPayments(paymentData);
    console.log(`✅ Parsed ${payments.length} payment records\n`);

    // Upload to Firebase
    console.log('📤 Uploading to Firebase...');
    console.log('   This may take a few minutes...\n');

    let uploadCount = 0;
    const batchSize = 10;

    for (let i = 0; i < payments.length; i += batchSize) {
      const batch = payments.slice(i, i + batchSize);

      await Promise.all(
        batch.map(payment =>
          addDoc(collection(db, 'revenue'), {
            ...payment,
            propertyId: 'cochran', // Default to Cozy Cactus
            importDate: new Date()
          })
        )
      );

      uploadCount += batch.length;
      const percent = Math.round((uploadCount / payments.length) * 100);
      process.stdout.write(`\r   📊 Progress: ${uploadCount}/${payments.length} (${percent}%)`);
    }

    console.log('\n\n✅ Successfully uploaded all payment records!');
    console.log(`\n🎉 Migration complete! Your dashboard now has ${payments.length} revenue records.`);
    console.log('\n💡 Next steps:');
    console.log('   1. Start the dashboard: netlify dev');
    console.log('   2. Open: http://localhost:8888/dashboard.html');
    console.log('   3. See your data visualized! 🌵✨\n');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration
migrateData();
