// popup.js

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];

    // Send a message to content script to check if the user is on LinkedIn
    chrome.tabs.sendMessage(currentTab.id, { action: 'checkLinkedInUrl' }, function (response) {
      const statusMessage = document.getElementById('statusMessage');

      if (response && response.isLinkedIn) {
        statusMessage.textContent = 'You are on LinkedIn. You can proceed with other functionalities.';
      } else {
        statusMessage.textContent = 'This is not a LinkedIn page. Please open LinkedIn to use the extension.';
      }
    });
  });
});
