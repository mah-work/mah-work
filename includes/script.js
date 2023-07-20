/* Color function */ 

document.addEventListener('DOMContentLoaded', function() {
    const codeBlock = document.getElementById('code-block');
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

/* Search function */

let originalVisibility = []; // Array to store the original visibility of collection items

// Functions are defined outside the DOMContentLoaded event handler
function search() {
    const searchInput = document.getElementById('site-search');
    const searchTerm = searchInput.value.toLowerCase();

    const collectionItems = document.querySelectorAll('.collection-item');

    if (originalVisibility.length === 0) {
        // Store the original visibility if it hasn't been stored yet
        originalVisibility = Array.from(collectionItems).map(item => item.style.display);
    }

    collectionItems.forEach(function(item, index) {
        const title = item.querySelector('.title');
        const desc = item.querySelector('.desc');
        const code = item.querySelector('.code');

        if (
            (title && title.textContent.toLowerCase().includes(searchTerm)) ||
            (desc && desc.textContent.toLowerCase().includes(searchTerm)) ||
            (code && code.textContent.toLowerCase().includes(searchTerm))
        ) {
            item.style.display = originalVisibility[index]; // Show the matching item
        } else {
            item.style.display = 'none'; // Hide non-matching items
        }
    });
}

function resetSearch() {
    const collectionItems = document.querySelectorAll('.collection-item');

    collectionItems.forEach(function(item, index) {
        item.style.display = originalVisibility[index]; // Restore the original visibility
    });

    originalVisibility = []; // Reset the originalVisibility array
    document.getElementById('site-search').value = ''; // Clear the search input
}

function searchOnEnter(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Wrap the function calls inside DOMContentLoaded event handler
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for buttons
    document.querySelector('button[onclick="search()"]').addEventListener('click', search);
    document.querySelector('button[onclick="resetSearch()"]').addEventListener('click', resetSearch);
});
