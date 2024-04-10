document.addEventListener("DOMContentLoaded", () => {
    const dogImage = document.getElementById('dogImage');

    // Function to fetch a random dog picture URL
    const getRandomDogPicture = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch dog picture');
                }
                return response.json();
            })
            .then(data => {
                dogImage.src = data.message;
                dogImage.alt = 'Random Dog';
            })
            .catch(error => {
                console.error('Error fetching dog picture:', error);
                alert('An error occurred while fetching the dog picture. Please try again later.');
            });
    };

    // Fetch and display a random dog picture when the page loads
    getRandomDogPicture();

    // Add event listener to the button to trigger fetching a random dog picture
    const getDogButton = document.getElementById('getDogButton');
    getDogButton.addEventListener('click', getRandomDogPicture);
});