document.getElementById("explain").addEventListener("click", function () {
  const text = document.getElementById("textInput").value.trim();
  if (text == "") {
    document.querySelector(".result").textContent =
      "Please enter some text first.";
    return;
  }
  callAI(
    `Explain this in simple terms in short sentences, no markdown symbols: ${text}`,
  );
});

document.getElementById("summarise").addEventListener("click", function () {
  const text = document.getElementById("textInput").value.trim();
  if (text == "") {
    document.querySelector(".result").textContent =
      "Please enter some text first.";
    return;
  }
  callAI(
    `Summarise this in short bullet points, each on a new line, no markdown symbols: ${text}`,
  );
});

document.getElementById("quiz").addEventListener("click", function () {
  const text = document.getElementById("textInput").value.trim();
  if (text == "") {
    document.querySelector(".result").textContent =
      "Please enter some text first.";
    return;
  }
  callAI(`Generate 1 multiple choice question to test understanding of this text. Format exactly like this with line breaks between each part, no markdown symbols:
    Question: [question here]
    A. [option]
    B. [option]
    C. [option]
    D. [option]
    Correct answer: [letter]

    Text: ${text}`);
});

function callAI(promptText) {
  const result = document.querySelector(".result");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer API-KEY",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: [{ role: "user", content: promptText }],
    }),
  };

  result.textContent = "Thinking...";
  result.style.display = "block";

  fetch("https://openrouter.ai/api/v1/chat/completions", options)
    .then((response) => response.json())
    .then((data) => {
      const text = data.choices[0].message.content;
      result.innerHTML = text.replace(/\n/g, "<br>");
    })
    .catch((error) => {
      result.textContent = "Something went wrong. Try again.";
    });
}
document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get("selectedText", function (data) {
    if (data.selectedText) {
      document.getElementById("textInput").value = data.selectedText;
      chrome.storage.local.remove("selectedText");
    }
  });
});
