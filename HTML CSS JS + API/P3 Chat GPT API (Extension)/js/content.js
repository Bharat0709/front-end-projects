chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "checkLinkedInUrl") {
    // Check if it's a LinkedIn page
    const isLinkedIn = isLinkedInUrl(window.location.href);

    // Send a response back with the result of the isLinkedInUrl check
    sendResponse({ isLinkedIn });
  }

  // Remove the placeholder text
  addGenerateButtonToActiveComment();
});

function isLinkedInUrl(url) {
  return url.includes("linkedin.com");
}

function addGenerateButtonToActiveComment() {
  const commentInputs = document.querySelectorAll(
    ".comments-comment-box-comment__text-editor"
  );

  commentInputs.forEach((commentInput) => {
    const commonParent = commentInput.closest(
      ".feed-shared-update-v2.feed-shared-update-v2--minimal-padding.full-height.relative"
    );
    console.log(commentInput);
    if (commonParent) {
      const existingButton = commentInput.querySelector("#generateButton");
      const commentSection = commonParent.querySelector(
        ".comments-comment-box-comment__text-editor"
      );
      const contentSection = commonParent.querySelector(
        ".update-components-text span.break-words"
      );
      const qlEditor = commonParent.querySelector(".ql-blank");

      if (!existingButton && commentSection && contentSection) {
        const generateButton = document.createElement("button");
        const dropdown = document.createElement("select");

        generateButton.id = "generateButton";
        dropdown.id = "commentOptions";

        generateButton.textContent = "Generate";
        generateButton.classList.add("your-extension-button");
        generateButton.style.backgroundColor = "#0077B5";
        generateButton.style.color = "#ffffff";
        generateButton.style.padding = "8px 16px";
        generateButton.style.fontSize = "12px";
        generateButton.style.border = "none";
        generateButton.style.borderRadius = "200px";

        dropdown.style.borderRadius = "20px";
        dropdown.style.backgroundColor = "#0077B5";
        dropdown.style.padding = "4px 16px";
        dropdown.style.margin = "8px 4px";

        const options = [
          "friendly",
          "funny",
          "disagree",
          "congratulate",
          "question",
        ];
        options.forEach((option) => {
          const optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.textContent =
            option.charAt(0).toUpperCase() + option.slice(1);
          dropdown.appendChild(optionElement);
        });

        commonParent.style.alignItems = "center";
        const commentBox = commonParent.querySelector(
          ".comments-comment-box-comment__text-editor"
        );
        commentBox.style.display = "flex";
        commentBox.style.alignItems = "center";
        commentBox.style.justifyContent = "flex-start";
        qlEditor.setAttribute("data-placeholder", " ");
        qlEditor.setAttribute("aria-placeholder", " ");
        commentInput.appendChild(generateButton);
        commentInput.appendChild(dropdown);

        generateButton.addEventListener("click", async () => {
          const selectedOption = dropdown.value;
          console.log(selectedOption);
          const postContentDiv = contentSection;
          console.log(postContentDiv);

          if (postContentDiv) {
            commentInput.removeChild(dropdown);
            // Get the text content of the post
            const postContent = postContentDiv.textContent.trim();

            // Log the original post content to the console
            console.log("Original Post Content:", postContent);

            // Call a function to send the post content to ChatGPT API with 120 tokens
            await sendToChatGPT(postContent, selectedOption, commentSection);
          }
        });
      }
    }
  });
}

async function sendToChatGPT(postContent, selectedOption, commentDiv) {
  // Set the initial message for "Reading post..."
  const qlEditor = document.querySelector(".ql-editor");

  // Remove the placeholder text
  qlEditor.textContent = " ";

  const generateButton = commentDiv.querySelector("#generateButton");
  if (generateButton) {
    generateButton.remove();
  }
  const dropdown = commentDiv.querySelector("#commentOptions");
  if (dropdown) {
    dropdown.remove();
  }
  const messageDiv = document.createElement("div");
  messageDiv.style.color = "#000";
  messageDiv.textContent = "Reading post 👻...";
  messageDiv.classList.add("comment-message");
  messageDiv.classList.add("comment-message-blink");
  const style = document.createElement("style");
  style.textContent = `
  .comment-message {
    animation: blink-animation 1.5s infinite;
  }

  @keyframes blink-animation {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`;

  document.head.appendChild(style);
  commentDiv.appendChild(messageDiv);

  // Delay for some time before updating to "Generating comment..."
  await sleep(6000); // Adjust the delay as needed

  messageDiv.textContent = "Generating Comment 😜...";

  await sleep(6000);

  messageDiv.textContent = "Almost Donee 😍...";
  await sleep(3000);

  try {
    // Replace 'YOUR_API_KEY' with your actual ChatGPT API key
    const apiKey = "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";
    const prompt = `Generate a ${selectedOption} comment for the following post:\n\n${postContent}`;
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 60, // Set the number of tokens
      }),
    };

    const chatGPTResults = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    ).then((res) => res.json());

    // Get the generated comment from ChatGPT
    const generatedComment = chatGPTResults.choices[0].message.content;
    messageDiv.remove();

    // Log the generated comment to the console
    console.log("Generated Comment:", generatedComment);

    const pTag = commentDiv.querySelector(".ql-editor p");
    animateText(generatedComment, pTag);
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);

    // Display the error in the pTag
    const pTag = commentDiv.querySelector(".ql-editor p");
    pTag.textContent = `Error: ${error.message || "Unknown error"}`;
    messageDiv.remove();
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
messageDiv.remove();

function animateText(text, element) {
  var characters = text.split("");
  var index = 0;

  function animate() {
    if (index < characters.length) {
      element.textContent += characters[index];
      index++;
      setTimeout(animate, 30); // Adjust the delay as needed
    }
  }

  animate();
}
