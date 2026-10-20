# Jones Automation Exercise

A Playwright script that fills in and submits the "Request a call back" form on https://test.netlify.app/.

## Features

- Fills in Name, Email, Phone, Company and Website.
- Changes Number of Employees from 1-10 to 51-500 (bonus).
- Saves a full-page screenshot to `screenshots/before-submit.png` before submitting.
- Clicks "Request a call back".
- Logs to the console when the thank you page is reached.
- Exits with code 1 and prints the error if any step fails.

## Requirements

- [Node.js](https://nodejs.org/en/download/) 18 or newer

## How to run

```bash
npm install
npx playwright install chromium
npm start
```

Expected output:

```
Reached the thank you page: https://test.netlify.app/thank-you.html?name=Gilad+Twili&...&number_of_employees=51-500
```

## Files

- `automation.js`: the automation script
- `package.json`: the dependency and the `npm start` script
- `screenshots/before-submit.png`: the screenshot from the last run
