// Jones Automation exercise: fills in the "Request a call back" form on
// https://test.netlify.app/, takes a screenshot, submits it and confirms
// that the thank you page was reached.
const { chromium } = require('playwright');

const SITE_URL = 'https://test.netlify.app/';

// Test data. Each key matches the id of an input on the form.
// Email and website must be valid, otherwise HTML5 validation blocks the submit.
const lead = {
  name: 'Gilad Twili',
  email: 'gilad@example.com',
  phone: '0501234567',
  company: 'Jones',
  website: 'https://example.com',
};

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(SITE_URL);

    // Type values into Name, Email, Phone, Company and Website.
    for (const [field, value] of Object.entries(lead)) {
      await page.fill(`#${field}`, value);
    }

    // Bonus: change Number of Employees from 1-10 to 51-500.
    await page.selectOption('#employees', '51-500');

    // Screenshot of the filled form, taken before submitting.
    await page.screenshot({ path: 'screenshots/before-submit.png', fullPage: true });

    // Submit, then wait for the thank you page URL and its heading.
    await page.click('text=Request a call back');
    await page.waitForURL('**/thank-you.html**');
    await page.getByRole('heading', { name: 'Thank You!' }).waitFor();

    console.log('Reached the thank you page:', page.url());
  } catch (err) {
    // Report the failure and exit with a non-zero code.
    console.error('Automation failed:', err.message);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

run();
