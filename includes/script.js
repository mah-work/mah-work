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

const collectionItems = document.querySelectorAll('.collection-item');

// Arrays to store the original visibility of collection items, titles, descs, and codes
let originalCollectionVisibility = [];
let originalTitleVisibility = [];
let originalDescVisibility = [];
let originalCodeVisibility = [];

// Function to store the original visibility of collection items, titles, descs, and codes
function storeOriginalVisibility() {
    collectionItems.forEach(item => originalCollectionVisibility.push(item.style.display));

    const titles = document.querySelectorAll('.collection-item.title');
    titles.forEach(title => originalTitleVisibility.push(title.style.display));

    const descs = document.querySelectorAll('.collection-item.desc');
    descs.forEach(desc => originalDescVisibility.push(desc.style.display));

    const codes = document.querySelectorAll('.collection-item.code');
    codes.forEach(code => originalCodeVisibility.push(code.style.display));
}

// Functions are defined outside the DOMContentLoaded event handler
function search() {
    const searchInput = document.getElementById('site-search');
    const searchTerm = searchInput.value.toLowerCase();

    if (originalCollectionVisibility.length === 0) {
        storeOriginalVisibility(); // Store the original visibility if it hasn't been stored yet
    }

    collectionItems.forEach(function(item, index) {
        const title = item.querySelector('.title');
        const desc = item.querySelector('.desc');
        const code = item.querySelector('.code');

        // Check if the collection item or its corresponding title, desc, or code contains the search term
        const isMatching = item.textContent.toLowerCase().includes(searchTerm) ||
            (title && title.textContent.toLowerCase().includes(searchTerm)) ||
            (desc && desc.textContent.toLowerCase().includes(searchTerm)) ||
            (code && code.textContent.toLowerCase().includes(searchTerm));

        item.style.display = isMatching ? originalCollectionVisibility[index] : 'none'; // Show or hide the collection item accordingly

        if (title) {
            title.style.display = isMatching ? originalTitleVisibility[index] : 'none'; // Show or hide the title accordingly
        }

        if (desc) {
            desc.style.display = isMatching ? originalDescVisibility[index] : 'none'; // Show or hide the desc accordingly
        }

        if (code) {
            code.style.display = isMatching ? originalCodeVisibility[index] : 'none'; // Show or hide the code accordingly
        }
    });
}

function resetSearch() {
    collectionItems.forEach(function(item, index) {
        item.style.display = originalCollectionVisibility[index]; // Restore the original visibility of collection items
        const title = item.querySelector('.title');
        const desc = item.querySelector('.desc');
        const code = item.querySelector('.code');

        if (title) {
            title.style.display = originalTitleVisibility[index]; // Restore the original visibility of titles
        }

        if (desc) {
            desc.style.display = originalDescVisibility[index]; // Restore the original visibility of descs
        }

        if (code) {
            code.style.display = originalCodeVisibility[index]; // Restore the original visibility of codes
        }
    });

    originalCollectionVisibility = []; // Reset the original visibility arrays
    originalTitleVisibility = [];
    originalDescVisibility = [];
    originalCodeVisibility = [];
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
