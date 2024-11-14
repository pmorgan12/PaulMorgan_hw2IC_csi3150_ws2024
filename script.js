// CSS feature information and image paths for each letter
const cssFeatures = {
  A: {
    image: "images/css-letter-a.png",
  },
  B: {
    image: "images/css-letter-b.png",
  },
  C: {
    image: "images/css-letter-c.png",
  },
};

// Function to display feature information and image based on the selected letter
function displayInfo(letter) {
  const infoContainer = document.getElementById(
    `info-container-${letter.toLowerCase()}`
  );
  const infoContent = document.getElementById(
    `info-content-${letter.toLowerCase()}`
  );
  const infoImage = document.getElementById(
    `info-image-${letter.toLowerCase()}`
  );

  // Set the text and image for the selected letter
  infoContent.textContent = cssFeatures[letter].text;
  infoImage.src = cssFeatures[letter].image;

  // Show the info container by adding the active class
  infoContainer.classList.add("active");
}

// Function to hide the information
function hideInfo(letter) {
  const infoContainer = document.getElementById(
    `info-container-${letter.toLowerCase()}`
  );
  const infoContent = document.getElementById(
    `info-content-${letter.toLowerCase()}`
  );
  const infoImage = document.getElementById(
    `info-image-${letter.toLowerCase()}`
  );

  // Hide the specific info container by removing the active class
  infoContainer.classList.remove("active");
  infoContent.textContent = "";
  infoImage.src = "";
}
