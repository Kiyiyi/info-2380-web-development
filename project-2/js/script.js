const toggleButton = document.querySelector('.toggle-button');
const tableOfContents = document.querySelector('.table-of-contents');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    tableOfContents.classList.toggle('dark-mode');
});