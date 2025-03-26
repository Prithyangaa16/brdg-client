const { google } = require("googleapis");
const fs = require("fs");

const credentials = JSON.parse(fs.readFileSync("spread-sheet.json")); // Load Google Service Account JSON

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Function to get an authenticated Google Sheets instance
async function getSheetsClient() {
  const client = await auth.getClient();
  return google.sheets({ version: "v4", auth: client });
}

module.exports = getSheetsClient;