# Student Buddy 🎓

A Chrome Extension that helps students understand text from any webpage using AI.

## What it does

Highlight any text on a webpage, open the extension, and it auto-fills with your selected text. Pick a mode and get an instant AI response.

Three modes:

Explain gives a simple plain language explanation of the text.
Summarise gives a short 3 point summary.
Quiz Me generates a multiple choice question to test your understanding.

It works on any website, not just specific ones.

## Tech used

Built with plain HTML, CSS, and JavaScript, no frameworks. Uses Chrome Extensions Manifest V3, the Chrome Storage API to pass data between scripts, and the OpenRouter API for AI responses.

## How it works

The extension uses two separate scripts. `content.js` runs inside every webpage and listens for when you select text. `popup.js` runs inside the extension popup and handles the UI plus AI requests.

When you highlight text, `content.js` saves it using Chrome's storage. When you open the popup, `popup.js` reads that saved text and fills it in automatically.

## How to run it locally

Clone this repository, then go to chrome://extensions in Chrome, turn on Developer mode, click Load unpacked, and select the folder. The extension icon will appear in your toolbar.

## Add your own API key

This uses a free model from OpenRouter. Create a free account at openrouter.ai, generate an API key, open popup.js, and replace YOUR_API_KEY_HERE with your real key.
