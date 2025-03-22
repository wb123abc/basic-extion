chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome AI Extension Installed!");
});

async function askAI(userInput) {
  if (!chrome.runtime.prompt) {
    console.error("AI Prompt API is not available. Make sure you're using Chrome 131+.");
    return;
  }

  try {
    const response = await chrome.runtime.prompt({
      model: "gemini", // Google's AI model
      prompt: userInput,
      maxTokens: 100,
      temperature: 0.7
    });

    console.log("AI Response:", response);
  } catch (error) {
    console.error("AI API Error:", error);
  }
}

// Example: Call AI when extension loads
askAI("Write a short greeting message.");
