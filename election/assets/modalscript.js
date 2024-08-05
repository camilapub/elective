document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)

    const voteButton = document.getElementById('voteButton');
    const modal = document.getElementById('myModal');
    const modalContent = document.getElementById('modalContent');
    const selectedBakerySpan = document.getElementById('selectedBakery');

    // Function to show the modal
    function showModal() {
        modal.style.display = 'block';
    }

    // Event listener for the orange button
    voteButton.addEventListener('click', function () {
        if (!voteButton.disabled) {
            // Get the selected radio option
            const selectedRadio = document.querySelector('input[type="radio"]:checked');
            if (selectedRadio) {
                // Set the content of the modal
                selectedBakerySpan.textContent = selectedRadio.parentNode.querySelector('.card__details span:first-child').textContent;
                showModal();
            }
        }
    });
});

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}