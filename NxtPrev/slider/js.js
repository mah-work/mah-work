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
