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

document.addEventListener('DOMContentLoaded', function() {
    function search() {
        const searchInput = document.getElementById('site-search');
        const searchTerm = searchInput.value.toLowerCase();

        const collectionItems = document.querySelectorAll('.collection-item');

        collectionItems.forEach(function(item) {
            const title = item.querySelector('.title');
            const desc = item.querySelector('.desc');
            const code = item.querySelector('.code');

            if (
                (title && title.textContent.toLowerCase().includes(searchTerm)) ||
                (desc && desc.textContent.toLowerCase().includes(searchTerm)) ||
                (code && code.textContent.toLowerCase().includes(searchTerm))
            ) {
                item.style.display = 'block'; // Show the matching item
            } else {
                item.style.display = 'none'; // Hide non-matching items
            }
        });
    }

    function resetSearch() {
        const collectionItems = document.querySelectorAll('.collection-item');

        collectionItems.forEach(function(item) {
            item.style.display = 'block'; // Reset all items to be visible
        });

        document.getElementById('site-search').value = ''; // Clear the search input
    }

    function searchOnEnter(event) {
        if (event.key === 'Enter') {
            search();
        }
    }
});
