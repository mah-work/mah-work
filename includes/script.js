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

let originalCollectionVisibility = [];
let originalTitleVisibility = [];
let originalDescVisibility = [];
let originalCodeVisibility = [];

// Function to store the original visibility of collection items, titles, descs, and codes
function storeOriginalVisibility() {
    const collectionItems = document.querySelectorAll('.collection-item');
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
    const searchTerms = searchInput.value.toLowerCase().trim().split(/\s+/); // Split search terms by whitespace

    if (originalCollectionVisibility.length === 0) {
        storeOriginalVisibility(); // Store the original visibility if it hasn't been stored yet
    }

    const collectionItems = document.querySelectorAll('.collection-item');
    collectionItems.forEach(function(item, index) {
        const title = item.querySelector('.title');
        const desc = item.querySelector('.desc');
        const code = item.querySelector('.code');

        // Check if any of the search terms match the title, desc, or code
        const isMatchingTitle = title && searchTerms.some(term => title.textContent.toLowerCase().includes(term));
        const isMatchingDesc = desc && searchTerms.some(term => desc.textContent.toLowerCase().includes(term));
        const isMatchingCode = code && searchTerms.some(term => code.textContent.toLowerCase().includes(term));

        // Check if the collection item or its title, desc, or code contains any of the search terms
        const isMatching = searchTerms.some(term =>
            item.textContent.toLowerCase().includes(term) || isMatchingTitle || isMatchingDesc || isMatchingCode
        );

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
    const collectionItems = document.querySelectorAll('.collection-item');
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
    // Add event listener for buttons
    document.querySelector('button[onclick="search()"]').addEventListener('click', search);
    document.querySelector('button[onclick="resetSearch()"]').addEventListener('click', resetSearch);

    // Add event listener for the Enter key press on the search input
    document.getElementById('site-search').addEventListener('keydown', searchOnEnter);
});
