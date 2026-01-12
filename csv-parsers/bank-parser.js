// Bank Statement CSV Parser
// Parses bank statement CSVs (Relay, FPCU, etc.) into expense records

/**
 * Parse bank statement CSV
 * Expected format: Date, Description, Amount
 * Example: "2024-10-03","Zelle payment to Angelica Cleaner","-250.0"
 *
 * @param {string} csvText - CSV file contents as text
 * @returns {Array} - Parsed expense records
 */
export function parseBankCSV(csvText) {
  const expenses = [];
  const lines = csvText.split('\n').filter(line => line.trim());

  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line (handle quoted fields)
    const fields = parseCSVLine(line);

    if (fields.length >= 3) {
      const dateStr = fields[0].replace(/"/g, '');
      const description = fields[1].replace(/"/g, '');
      const amountStr = fields[2].replace(/"/g, '');

      const amount = parseFloat(amountStr);

      // Only process negative amounts (expenses)
      if (!isNaN(amount) && amount < 0) {
        const expense = {
          date: new Date(dateStr),
          description: description,
          amount: Math.abs(amount),
          category: categorizeExpense(description),
          vendor: extractVendor(description)
        };

        expenses.push(expense);
      }
    }
  }

  console.log(`Parsed ${expenses.length} expenses from bank statement`);
  return expenses;
}

/**
 * Parse a CSV line handling quoted fields
 * @param {string} line - Single CSV line
 * @returns {Array} - Array of field values
 */
function parseCSVLine(line) {
  const fields = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      fields.push(currentField);
      currentField = '';
    } else {
      currentField += char;
    }
  }

  fields.push(currentField); // Add last field
  return fields;
}

/**
 * Categorize expense based on description
 * @param {string} description - Transaction description
 * @returns {string} - Category name
 */
function categorizeExpense(description) {
  const desc = description.toLowerCase();

  // Contractor payments
  if (desc.includes('zelle') || desc.includes('venmo')) {
    if (desc.includes('cleaner') || desc.includes('cleaning')) return 'Cleaning';
    if (desc.includes('salgado') || desc.includes('property management')) return 'Property Management';
    if (desc.includes('handyman') || desc.includes('repair')) return 'Maintenance';
    if (desc.includes('gardener') || desc.includes('landscape')) return 'Landscaping';
    if (desc.includes('pool') || desc.includes('spa')) return 'Pool/Spa';
    return 'Contractor';
  }

  // Utilities
  if (desc.includes('spectrum') || desc.includes('internet')) return 'Internet';
  if (desc.includes('electric') || desc.includes('power') || desc.includes('solar')) return 'Electric';
  if (desc.includes('water') || desc.includes('sewer')) return 'Water';
  if (desc.includes('gas')) return 'Gas';

  // Mortgage
  if (desc.includes('mortgage') || desc.includes('loan')) return 'Mortgage';

  // Supplies
  if (desc.includes('home depot') || desc.includes('lowes') || desc.includes('amazon')) return 'Supplies';

  // Property Tax
  if (desc.includes('property tax') || desc.includes('tax payment')) return 'Property Tax';

  // Insurance
  if (desc.includes('insurance')) return 'Insurance';

  // Default
  return 'Other';
}

/**
 * Extract vendor name from transaction description
 * @param {string} description - Transaction description
 * @returns {string} - Vendor name
 */
function extractVendor(description) {
  // Try to extract vendor from Zelle/Venmo payments
  if (description.includes('Zelle payment to')) {
    const match = description.match(/Zelle payment to ([A-Za-z\s]+)/);
    return match ? match[1].trim() : 'Unknown';
  }

  if (description.includes('Venmo Payment to')) {
    const match = description.match(/Venmo Payment to ([A-Za-z\s]+)/);
    return match ? match[1].trim() : 'Unknown';
  }

  // For other transactions, use first part of description
  const parts = description.split(' ');
  return parts.slice(0, 2).join(' ');
}

/**
 * Parse Excel expense data (from Indio.xlsx Monthly 24 sheet)
 * @param {Array} rows - Array of row objects from Excel
 * @returns {Array} - Parsed expense records
 */
export function parseExcelExpenses(rows) {
  const expenses = [];
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];

  rows.forEach(row => {
    const category = row['Expense Item'] || row['Cochran Monthly Expenses 2024'];

    if (!category || category === 'Expense Item' || category === 'TOTAL') {
      return; // Skip header and total rows
    }

    // Process each month
    months.forEach((month, monthIndex) => {
      const amount = parseFloat(row[month]);

      if (!isNaN(amount) && amount > 0) {
        expenses.push({
          date: new Date(2024, monthIndex, 1), // Default to 1st of month
          category: category,
          amount: amount,
          description: `${category} - ${month} 2024`,
          vendor: category === 'Mortgage' ? 'Mortgage Lender' : 'N/A'
        });
      }
    });
  });

  console.log(`Parsed ${expenses.length} expenses from Excel`);
  return expenses;
}

/**
 * Aggregate expenses by category and month
 * @param {Array} expenses - Expense records
 * @returns {Object} - Aggregated data
 */
export function aggregateExpensesByCategory(expenses) {
  const aggregated = {};

  expenses.forEach(expense => {
    const category = expense.category;

    if (!aggregated[category]) {
      aggregated[category] = {
        category,
        total: 0,
        count: 0,
        expenses: []
      };
    }

    aggregated[category].total += expense.amount;
    aggregated[category].count++;
    aggregated[category].expenses.push(expense);
  });

  return aggregated;
}
