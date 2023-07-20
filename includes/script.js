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

  function search() {
    const searchTerm = document.getElementById('site-search').value.toLowerCase();
    const collectionItems = document.getElementsByClassName('collection-item');

    for (const item of collectionItems) {
      const childElements = item.querySelectorAll('*'); // Get all child elements, including nested ones
      let foundMatch = false;

      for (const child of childElements) {
        const childContent = child.innerText.toLowerCase();

        if (childContent.includes(searchTerm)) {
          foundMatch = true;
          break; // If we find a match, no need to check other elements inside this collection-item
        }
      }

      // Show or hide the entire collection-item based on whether any child element contains the search term
      item.style.display = foundMatch ? 'block' : 'none';
    }
  }

  function resetSearch() {
    const collectionItems = document.getElementsByClassName('collection-item');

    for (const item of collectionItems) {
      item.style.display = 'block'; // Reset the display of all collection items to 'block'
    }
  }
  
function searchOnEnter(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Wrap the function calls inside DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for buttons
    document.querySelector('button[onclick="search()"]').addEventListener('click', search);
    document.querySelector('button[onclick="resetSearch()"]').addEventListener('click', resetSearch);

    // Add event listener for the Enter key press on the search input
    document.getElementById('site-search').addEventListener('keydown', searchOnEnter);
});

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Wrap the function calls inside DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for buttons
    document.querySelector('button[onclick="search()"]').addEventListener('click', search);
    document.querySelector('button[onclick="resetSearch()"]').addEventListener('click', resetSearch);

    // Add event listener for the Enter key press on the search input
    document.getElementById('site-search').addEventListener('keydown', searchOnEnter);
});
