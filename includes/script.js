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
