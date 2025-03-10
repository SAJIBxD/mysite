document.addEventListener("DOMContentLoaded", function () {
  // Get all code blocks
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((block) => {
    // Create a container for the copy icon
    const copyIconContainer = document.createElement("div");
    copyIconContainer.classList.add("copy-icon");

    // Create copy icon using Feather's direct SVG generation
    copyIconContainer.innerHTML = feather.icons["copy"].toSvg();

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
  // Replace with clipboard icon using Feather's direct SVG generation
  iconContainer.innerHTML = feather.icons["clipboard"].toSvg();

  // Revert to the copy icon after 1.5 seconds
  setTimeout(() => {
    iconContainer.innerHTML = feather.icons["copy"].toSvg();
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
