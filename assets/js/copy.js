document.addEventListener("DOMContentLoaded", function () {
  // Get all code blocks
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((block) => {
    // Create a container for the copy icon
    const copyIconContainer = document.createElement("div");
    copyIconContainer.classList.add("copy-icon");

    // Clone the SVG icon from the template
    const svgIcon = document.getElementById("copy-icon").cloneNode(true);
    svgIcon.style.display = "inline"; // Ensure the SVG is visible

    // Append the SVG to the container
    copyIconContainer.appendChild(svgIcon);

    // Add click event to copy code
    copyIconContainer.addEventListener("click", () => {
      const code = block.querySelector("code").innerText;

      // Use Clipboard API if available
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(code)
          .then(() => {
            replaceIconWithClipboard(copyIconContainer);
          })
          .catch(() => {
            fallbackCopyText(code, copyIconContainer);
          });
      } else {
        // Fallback for older browsers
        fallbackCopyText(code, copyIconContainer);
      }
    });

    // Append the copy icon container to the code block
    block.appendChild(copyIconContainer);
  });
});

// Function to replace the copy icon with a clipboard icon
function replaceIconWithClipboard(iconContainer) {
  // Remove the existing icon
  iconContainer.innerHTML = "";

  // Clone the clipboard icon from the template
  const clipboardIcon = document
    .getElementById("clipboard-icon")
    .cloneNode(true);
  clipboardIcon.style.display = "inline"; // Ensure the SVG is visible

  // Append the clipboard icon to the container
  iconContainer.appendChild(clipboardIcon);

  // Revert to the copy icon after 1.5 seconds
  setTimeout(() => {
    iconContainer.innerHTML = "";
    const copyIcon = document.getElementById("copy-icon").cloneNode(true);
    copyIcon.style.display = "inline";
    iconContainer.appendChild(copyIcon);
  }, 1500);
}

// Fallback method for older browsers
function fallbackCopyText(text, iconContainer) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed"; // Prevent scrolling to bottom
  document.body.appendChild(textarea);
  textarea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      replaceIconWithClipboard(iconContainer);
    } else {
      console.error("Fallback copy failed");
    }
  } catch (err) {
    console.error("Fallback copy failed", err);
  } finally {
    document.body.removeChild(textarea);
  }
}
