/* Color function */
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('#code-block');

  codeBlocks.forEach(codeBlock => {
    const keywords = ['const', 'querySelector', 'forEach'];

    const text = codeBlock.textContent;
    const regex = new RegExp(keywords.join('|'), 'gi');

    codeBlock.innerHTML = text.replace(regex, match => {
      const lowerCaseMatch = match.toLowerCase();
      if (lowerCaseMatch === 'const') {
        return `<span class="const">${match}</span>`;
      } else if (lowerCaseMatch === 'queryselector') {
        return `<span class="querySelector">${match}</span>`;
      } else if (lowerCaseMatch === 'foreach') {
        return `<span class="forEach">${match}</span>`;
      } else {
        return match;
      }
    });
  });
});

// Function to assign unique classes to collection-items and their child elements
function assignUniqueClasses() {
  const collectionItems = document.querySelectorAll('.collection-item');

  collectionItems.forEach(function (item, index) {
    item.classList.add('collection-item-' + index);

    const title = item.querySelector('.title');
    if (title) {
      title.classList.add('title-' + index);
    }

    const code = item.querySelector('.code');
    if (code) {
      code.classList.add('code-' + index);
    }

    const desc = item.querySelector('.desc');
    if (desc) {
      desc.classList.add('desc-' + index);
    }
  });
}

// Function to handle filtering based on user input
function filterItems() {
  const filterInput = document.getElementById('filter-input').value.toLowerCase();
  const collectionItems = Array.from(document.querySelectorAll('.collection-item'));

  if (filterInput === '') {
    // If input field is empty, reset background color and show all collection-items
    collectionItems.forEach(function (item) {
      item.style.display = 'block';
      item.style.backgroundColor = 'white';
    });
    return;
  }

  collectionItems.forEach(function (item) {
    const itemIndex = item.classList[1].split('-')[1]; // Get the index of the collection-item

    const title = document.querySelector('.title-' + itemIndex);
    const code = document.querySelector('.code-' + itemIndex);
    const desc = document.querySelector('.desc-' + itemIndex);

    const titleMatch = title && title.textContent.toLowerCase().includes(filterInput);
    const codeMatch = code && code.textContent.toLowerCase().includes(filterInput);
    const descMatch = desc && desc.textContent.toLowerCase().includes(filterInput);

    const shouldShowItem = titleMatch || codeMatch || descMatch;

    if (shouldShowItem) {
      item.style.display = 'block';
      item.style.backgroundColor = 'lightgreen'; // Change background color to light green

      if (title) {
        title.style.display = 'block';
      }

      if (code) {
        code.style.display = 'block';
      }

      if (desc) {
        desc.style.display = 'block';
      }
    } else {
      item.style.display = 'none';
    }
  });
}

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // Assign unique classes when the page loads
  assignUniqueClasses();

  // Event listener for the filter input
  document.getElementById('filter-input').addEventListener('input', filterItems);
});

