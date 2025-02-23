// JavaScript code for interacting with the template

// Example function to handle navigation clicks
function handleNavigationClick(event) {
    // Prevent default behavior of links
    event.preventDefault();

    // Get the href attribute of the clicked link
    const href = event.target.getAttribute('href');

    // Navigate to the corresponding page (you can use any navigation mechanism here)
    console.log('Navigating to:', href);
}

// Attach click event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigationClick);
});

// Function to insert content into the template and display it in the main section
function displayContent(title, content) {
    const template = `
        <h2>${title}</h2>
        <p>${content}</p>
    `;
    
    document.querySelector('.main').innerHTML = template;
}

// Example usage of displayContent function
displayContent('About Us', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus dignissim lectus, eu rutrum libero porta sit amet.');
