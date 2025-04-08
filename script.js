// Get the modal element
const modal = document.getElementById('myModal');

// Get the button that opens the modal
const openBtn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
const closeBtn = document.querySelector('.close-btn');

// Function to open the modal
function openModal() {
    modal.classList.add('active');
    // Optional: You could also use modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
     modal.classList.remove('active');
    // Optional: You could also use modal.style.display = 'none';
}

// Event listener for the open button
openBtn.addEventListener('click', openModal);

// Event listener for the close button
closeBtn.addEventListener('click', closeModal);

// Event listener to close modal if user clicks outside the modal content
window.addEventListener('click', (event) => {
    // Check if the click target is the modal background itself
    if (event.target == modal) {
        closeModal();
    }
});

// Optional: Close modal on Escape key press
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
