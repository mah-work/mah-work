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

  collectionItems.forEach(function(item, index) {
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
  const collectionItems = document.querySelectorAll('.collection-item');

  collectionItems.forEach(function(item) {
    const itemIndex = item.classList[1].split('-')[1]; // Get the index of the collection-item

    const title = document.querySelector('.title-' + itemIndex);
    const code = document.querySelector('.code-' + itemIndex);
    const desc = document.querySelector('.desc-' + itemIndex);

    const shouldShowItem =
      item.textContent.toLowerCase().includes(filterInput) ||
      (title && title.textContent.toLowerCase().includes(filterInput)) ||
      (code && code.textContent.toLowerCase().includes(filterInput)) ||
      (desc && desc.textContent.toLowerCase().includes(filterInput));

    if (shouldShowItem) {
      item.style.display = 'block';
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

      if (title) {
        title.style.display = 'none';
      }

      if (code) {
        code.style.display = 'none';
      }

      if (desc) {
        desc.style.display = 'none';
      }
    }
  });
}

// Assign unique classes when the page loads
assignUniqueClasses();

// Event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // Event listener for the filter input
  document.getElementById('filter-input').addEventListener('input', filterItems);
});

