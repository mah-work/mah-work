$(document).ready(function() {
  var container = $('#products-container');
  var card = $('.product-card');
  var desc = $('.product-desc');
  var img = $('.product-img');

  // Initially hide the product description and image
  desc.hide();
  img.hide();

  // Show the product card
  card.show();

  // Slide to the next product on click
  container.on('click', function() {
    if (card.is(':visible')) {
      card.hide();
      desc.show();
    } else if (desc.is(':visible')) {
      desc.hide();
      img.show();
    } else {
      img.hide();
      card.show();
    }
  });
});

// secondary

$(document).ready(function() {
  var container = $('#products-container');
  var card = $('.product-card');
  var desc = $('.product-desc');
  var img = $('.product-img');

  // Initially hide the product description and image
  desc.hide();
  img.hide();

  // Show the initial product card
  card.show();

  // Slide to the next product on click
  container.on('click', function(event) {
    var mouseX = event.pageX - container.offset().left;
    var containerWidth = container.width();

    if (card.is(':visible')) {
      // Check if left or right 25% of the product card is clicked
      var cardWidth = card.width();
      if (mouseX < cardWidth * 0.25) {
        // Show product description
        card.hide();
        img.hide();
        desc.show();
      } else if (mouseX > cardWidth * 0.75) {
        // Show product image
        card.hide();
        desc.hide();
        img.show();
      } else {
        // Show next product card (loop back to the beginning if necessary)
        card.hide();
        desc.hide();
        img.hide();
        card = card.next('.product-card');
        if (card.length === 0) {
          card = $('.product-card:first');
        }
        card.show();
      }
    } else if (desc.is(':visible')) {
      // Check if within the 25% of the right side on product description is clicked
      if (mouseX > containerWidth * 0.75) {
        // Show product card
        desc.hide();
        img.hide();
        card.show();
      }
    } else if (img.is(':visible')) {
      // Check if within the 25% of the left side on product image is clicked
      if (mouseX < containerWidth * 0.25) {
        // Show product card
        img.hide();
        desc.hide();
        card.show();
      }
    }
  });
});
