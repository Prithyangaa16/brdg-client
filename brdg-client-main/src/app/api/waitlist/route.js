const API_URL = "https://brdg-server.onrender.com/api";

export const postWaitlist = async (waitlist) => {
  try {
    const response = await fetch(`${API_URL}/addToWaitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(waitlist),
    });
    return await response.json();
  } catch (error) {
    console.error("Error posting waitlist:", error);
    return { error: "Failed to post waitlist" };
  }
}
