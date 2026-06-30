console.log("content.js loaded");
document.addEventListener("mouseup", function () {
  const selectedText = window.getSelection().toString();

  if (selectedText.trim() !== "") {
    chrome.storage.local.set({ selectedText: selectedText });
  }
});
