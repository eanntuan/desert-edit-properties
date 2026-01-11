const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  // Get API key from environment variable (set in Netlify dashboard)
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;

  if (!MAILERLITE_API_KEY) {
    console.error('MailerLite API key not found');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' })
    };
  }

  try {
    // Parse the form submission data
    const data = JSON.parse(event.body);
    const email = data.payload.email;
    const discountCode = data.payload['discount-code'] || 'DIRECT10';

    console.log('Adding subscriber to MailerLite:', email);

    // Prepare subscriber data with custom field for signup source
    const subscriberData = {
      email: email,
      fields: {
        signup_source: discountCode // DIRECT10 or NEWSLETTER
      }
    };

    console.log('Subscriber data:', subscriberData);

    // Send to MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify(subscriberData)
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', responseData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to add subscriber', details: responseData })
      };
    }

    console.log('Successfully added subscriber:', responseData);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Subscriber added to MailerLite successfully',
        subscriber: responseData
      })
    };

  } catch (error) {
    console.error('Error processing webhook:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
