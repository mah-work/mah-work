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
  // Get the search term entered by the user
  const searchTerm = document.getElementById("site-search").value.toLowerCase();

  // Get all the collection items
  const collectionItems = document.querySelectorAll(".collection-item");

  // Loop through each collection item to check for a match
  collectionItems.forEach(function (item) {
    const itemTitle = item.querySelector(".title").textContent.toLowerCase();
    const itemCode = item.querySelector(".code").textContent.toLowerCase();
    const itemDesc = item.querySelector(".desc").textContent.toLowerCase();

    // Check if the search term exists in the title, code, or description of the collection item
    const matchesSearchTerm = itemTitle.includes(searchTerm) || itemCode.includes(searchTerm) || itemDesc.includes(searchTerm);
    
    item.style.display = matchesSearchTerm ? "block" : "none";
  });
}

function resetSearch() {
  // Reset the search input
  document.getElementById("site-search").value = "";

  // Show all the collection items
  const collectionItems = document.querySelectorAll(".collection-item");
  collectionItems.forEach(function (item) {
    item.style.display = "block";
  });
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
