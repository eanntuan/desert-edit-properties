// QuickBooks Integration Functions
// Add these to dashboard-script.js

import { getDoc, getDocs, setDoc, deleteDoc, doc, collection, query, where, Timestamp } from 'firebase/firestore';
import { db } from './firebase-config.js';

/**
 * Show/hide settings section
 */
window.showSettings = function() {
  const settingsSection = document.getElementById('settings-section');
  const allSections = document.querySelectorAll('section:not(#settings-section)');

  // Toggle visibility
  const isVisible = settingsSection.style.display !== 'none';

  if (isVisible) {
    // Hide settings, show dashboard
    settingsSection.style.display = 'none';
    allSections.forEach(section => section.style.display = 'block');
  } else {
    // Show settings, hide dashboard
    settingsSection.style.display = 'block';
    allSections.forEach(section => {
      if (!section.classList.contains('hero-section') && section.id !== 'settings-section') {
        section.style.display = 'none';
      }
    });

    // Load QB status
    checkQuickBooksStatus();
  }
};

/**
 * Check QuickBooks connection status
 */
async function checkQuickBooksStatus() {
  try {
    const qbDoc = await getDoc(doc(db, 'settings', 'quickbooks'));

    if (qbDoc.exists()) {
      const qbData = qbDoc.data();

      // Update UI to show connected state
      document.getElementById('qb-status-badge').textContent = 'Connected';
      document.getElementById('qb-status-badge').className = 'status-badge connected';

      document.getElementById('qb-connect-btn').style.display = 'none';
      document.getElementById('qb-sync-btn').style.display = 'inline-block';
      document.getElementById('qb-disconnect-btn').style.display = 'inline-block';

      document.getElementById('qb-connected-info').style.display = 'block';

      // Show last sync info
      if (qbData.lastSync) {
        const lastSyncDate = qbData.lastSync.toDate();
        document.getElementById('qb-last-sync').textContent = lastSyncDate.toLocaleString();
      }

      // Show sync results
      if (qbData.lastSyncResults) {
        const results = qbData.lastSyncResults;
        const expenseCount = results.expenses || 0;
        const revenueCount = results.revenue || 0;
        const accountCount = results.bankAccounts || 0;

        document.getElementById('qb-sync-results').innerHTML = `
          <div>✓ ${expenseCount} expenses</div>
          <div>✓ ${revenueCount} revenue transactions</div>
          <div>✓ ${accountCount} bank accounts</div>
        `;
      }

    } else {
      // Not connected
      document.getElementById('qb-status-badge').textContent = 'Not Connected';
      document.getElementById('qb-status-badge').className = 'status-badge disconnected';

      document.getElementById('qb-connect-btn').style.display = 'inline-block';
      document.getElementById('qb-sync-btn').style.display = 'none';
      document.getElementById('qb-disconnect-btn').style.display = 'none';
      document.getElementById('qb-connected-info').style.display = 'none';
    }
  } catch (error) {
    console.error('Error checking QB status:', error);
  }
}

/**
 * Connect to QuickBooks
 */
window.connectQuickBooks = function() {
  // Redirect to QuickBooks OAuth
  window.location.href = '/.netlify/functions/quickbooks-auth';
};

/**
 * Sync QuickBooks data
 */
window.syncQuickBooks = async function() {
  const progressDiv = document.getElementById('qb-sync-progress');
  const progressFill = document.getElementById('qb-progress-fill');
  const progressText = document.getElementById('qb-progress-text');
  const syncBtn = document.getElementById('qb-sync-btn');

  try {
    // Show progress
    progressDiv.style.display = 'block';
    syncBtn.disabled = true;
    progressFill.style.width = '0%';
    progressText.textContent = 'Starting sync...';

    // Call sync function
    const response = await fetch('/.netlify/functions/quickbooks-sync', {
      method: 'POST'
    });

    progressFill.style.width = '50%';
    progressText.textContent = 'Syncing data...';

    const result = await response.json();

    if (result.success) {
      progressFill.style.width = '100%';

      const expenseCount = result.results.expenses;
      const revenueCount = result.results.revenue;
      const accountCount = result.results.bankAccounts;

      progressText.textContent = `✓ Synced ${expenseCount} expenses, ${revenueCount} revenue, ${accountCount} accounts`;

      // Reload dashboard data
      setTimeout(() => {
        progressDiv.style.display = 'none';
        loadDashboard();
        checkQuickBooksStatus();
      }, 2000);

      alert('QuickBooks sync complete! Your dashboard has been updated.');
    } else {
      throw new Error(result.error);
    }

  } catch (error) {
    console.error('Sync error:', error);
    progressDiv.style.display = 'none';
    alert('Failed to sync QuickBooks: ' + error.message);
  } finally {
    syncBtn.disabled = false;
  }
};

/**
 * Disconnect QuickBooks
 */
window.disconnectQuickBooks = async function() {
  if (!confirm('Are you sure you want to disconnect QuickBooks? Your synced data will not be deleted.')) {
    return;
  }

  try {
    await deleteDoc(doc(db, 'settings', 'quickbooks'));
    alert('QuickBooks disconnected successfully.');
    checkQuickBooksStatus();
  } catch (error) {
    console.error('Disconnect error:', error);
    alert('Failed to disconnect: ' + error.message);
  }
};

/**
 * Export dashboard data
 */
window.exportDashboardData = async function() {
  try {
    showLoading();

    // Fetch all data
    const revenue = await getDocs(collection(db, 'revenue'));
    const expenses = await getDocs(collection(db, 'expenses'));
    const bankAccounts = await getDocs(collection(db, 'bankAccounts'));

    const exportData = {
      revenue: revenue.docs.map(doc => doc.id, ...doc.data()),
      expenses: expenses.docs.map(doc => doc.id, ...doc.data()),
      bankAccounts: bankAccounts.docs.map(doc => doc.id, ...doc.data()),
      exportedAt: new Date().toISOString()
    };

    // Create download
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `desert-edit-dashboard-${new Date().toISOString().split('T')[0]}.json`;
    a.click();

    hideLoading();
    alert('Data exported successfully!');

  } catch (error) {
    hideLoading();
    console.error('Export error:', error);
    alert('Failed to export data: ' + error.message);
  }
};

/**
 * Clear old data
 */
window.clearOldData = async function() {
  if (!confirm('This will delete all data older than 3 years. Are you sure?')) {
    return;
  }

  try {
    showLoading();

    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    // Delete old revenue
    const oldRevenue = await getDocs(
      query(collection(db, 'revenue'), where('date', '<', Timestamp.fromDate(threeYearsAgo)))
    );
    oldRevenue.forEach(async (doc) => await deleteDoc(doc.ref));

    // Delete old expenses
    const oldExpenses = await getDocs(
      query(collection(db, 'expenses'), where('date', '<', Timestamp.fromDate(threeYearsAgo)))
    );
    oldExpenses.forEach(async (doc) => await deleteDoc(doc.ref));

    hideLoading();
    alert(`Deleted ${oldRevenue.size + oldExpenses.size} old records.`);
    loadDashboard();

  } catch (error) {
    hideLoading();
    console.error('Delete error:', error);
    alert('Failed to clear old data: ' + error.message);
  }
};

// Check for QB connection callback
window.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get('qb_connected') === 'true') {
    alert('QuickBooks connected successfully! Click "Sync Now" to import your data.');
    showSettings();
  } else if (urlParams.get('qb_error')) {
    alert('QuickBooks connection failed: ' + urlParams.get('qb_error'));
  }
});
