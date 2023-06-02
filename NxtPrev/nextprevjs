// Get all the container elements
var containers = document.querySelectorAll('#container');

// Initialize the current container index
var currentContainerIndex = 0;

// Hide all containers except the first one
for (var i = 1; i < containers.length; i++) {
  containers[i].style.display = 'none';
}

// Get the buttons inside each container
var buyButtons = document.querySelectorAll('.product-action button:nth-child(1)');
var passButtons = document.querySelectorAll('.product-action button:nth-child(2)');

// Get the reaction elements
var reactionYes = document.getElementById('reaction-yes');
var reactionNo = document.getElementById('reaction-no');

// Get the final element
var finalElement = document.getElementById('final');

// Function to show the next container after a delay
function showNextContainer() {
  // Move to the next container
  if (currentContainerIndex < containers.length - 1) {
    containers[currentContainerIndex].style.display = 'none';
    currentContainerIndex++;
    containers[currentContainerIndex].style.display = 'block';

    // Hide the reaction elements
    reactionYes.style.display = 'none';
    reactionNo.style.display = 'none';
  } else {
    // Show the final element
    finalElement.style.display = 'block';
  }
}

// Function to replace the card with the reaction element
function replaceCardWithReaction(reactionElement) {
  // Hide the current container
  containers[currentContainerIndex].style.display = 'none';

  // Show the reaction element
  reactionElement.style.display = 'block';

  // Delay showing the next container and hiding the reaction element
  setTimeout(function() {
    reactionElement.style.display = 'none';
    showNextContainer();
  }, 2000);
}

// Add click event listeners to the buttons
for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', function() {
    // Show the "Good buy" reaction and replace the card
    replaceCardWithReaction(reactionYes);
  });

  passButtons[i].addEventListener('click', function() {
    // Show the "Next time" reaction and replace the card
    replaceCardWithReaction(reactionNo);
  });
}

// Get the refresh button
var refreshButton = document.getElementById('refresh-button');

// Add click event listener to the refresh button
refreshButton.addEventListener('click', function() {
  // Reset the current container index to 0
  currentContainerIndex = 0;

  // Hide the final element
  finalElement.style.display = 'none';

  // Show the first container
  containers[currentContainerIndex].style.display = 'block';
});
