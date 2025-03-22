document.getElementById("askBtn").addEventListener("click", async () => {
  const userInput = document.getElementById("userInput").value;

  try {
    const response = await chrome.runtime.prompt({
      model: "gemini",
      prompt: userInput,
      maxTokens: 100,
      temperature: 0.7
    });

    document.getElementById("response").textContent = response;
  } catch (error) {
    console.error("AI Error:", error);
    document.getElementById("response").textContent = "Error: " + error.message;
  }
});
