const API_URL = "https://brdg-server.onrender.com/api";

export const postContact = async (contact) => {
  try {
    const response = await fetch(`${API_URL}/addToContact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    return await response.json();
  } catch (error) {
    console.error("Error posting contact:", error);
    return { error: "Failed to post contact" };
  }
}
