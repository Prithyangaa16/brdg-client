import getSheetsClient from "../config/googleAuth.js"; // Importing the getSheetsClient function

const SHEET_ID = "1ZAdPENldrkdrObDeaxRWO0Iz_xQ9c3BD79bY5UxmkuQ"; // Google Sheet ID

// Fetch waitlist data
export async function getWaitlistData(req, res) {
  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "waitlist!A2:B",
    });
    res.json(response.data.values);
  } catch (error) {
    console.error("Error fetching waitlist data:", error);
    res.status(500).json({ error: "Failed to fetch waitlist data" });
  }
}

// Fetch contact data
export async function getContactData(req, res) {
  try {
    const sheets = await getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "contact!A2:D",
    });
    res.json(response.data.values);
  } catch (error) {
    console.error("Error fetching contact data:", error);
    res.status(500).json({ error: "Failed to fetch contact data" });
  }
}

// Add to waitlist
export async function addToWaitlist(req, res) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "waitlist!A:B",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email]],
      },
    });
    res.json({ message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    res.status(500).json({ error: "Failed to add data to waitlist" });
  }
}

// Add to contact
export async function addToContact(req, res) {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const sheets = await getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "contact!A:D",
      valueInputOption: "RAW",
      requestBody: {
        values: [[name, email, subject, message]],
      },
    });
    res.json({ message: "Data added successfully!" });
  } catch (error) {
    console.error("Error adding to contact:", error);
    res.status(500).json({ error: "Failed to add data to contact" });
  }
}
