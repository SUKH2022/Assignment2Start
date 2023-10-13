// constants for query selector form the html ids and classes
const bgColorInput = document.querySelector('#customNumber'); 
const studentIdParagraph = document.querySelector('#myStudentId'); 
const customBgColorButton = document.querySelector('.custColor'); 
const randomBgColorButton = document.querySelector('.randColor'); 
const colorSelect = document.querySelector('#imageSelect');
const changeImageButton = document.querySelector('#images');

// function to change bg color from user input and add student id as well at the top
function changeCustomColor() {
    const bgColor = bgColorInput.value;
    // Change the background color of the pg based on user input or the range of colors
    if (bgColor >= 0 && bgColor <= 100) {
        // Adding the student ID at the top
        studentIdParagraph.textContent = `Student ID: 200520246`;

        // if-else statements for teh conditions given
        if (bgColor < 20) {
            document.body.style.backgroundColor = 'green';
        } else if (bgColor < 40) {
            document.body.style.backgroundColor = 'blue';
        } else if (bgColor < 60) {
            document.body.style.backgroundColor = 'orange';
        } else if (bgColor < 80) {
            document.body.style.backgroundColor = 'purple';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    } else {
        // Set the background color to red if input is out of range like in negative no.s
        document.body.style.backgroundColor = 'red';
        studentIdParagraph.textContent = ''; // Clearing the student ID
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    // Generate a random background color using a random number with math floor method
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Change the background color of the pg
    document.body.style.backgroundColor = randomColor;
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    // giving the limit of 5 options for 5 img
    if (colorSelect.options.length < 5) { 
        // Create an option elem
        const option = document.createElement('option');
        // Set the option's value with length +1
        option.value = `Option ${colorSelect.options.length + 1}`;
        // Set the option's text as well
        option.textContent = `Option ${colorSelect.options.length + 1}`;
        // Add the option to the select list with using append method
        colorSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    // Getting the selected option from the select list
    const selectedOption = colorSelect.options[colorSelect.selectedIndex].value;

    // Change the image source based on the selected option form the user
    switch (selectedOption) {
        case 'Option 1':
            changeImageSource('img1.jpg');
            break;
        case 'Option 2':
            changeImageSource('img2.jpg');
            break;
        case 'Option 3':
            changeImageSource('img3.jpg');
            break;
        case 'Option 4':
            changeImageSource('img4.jpg');
            break;
        case 'Option 5':
            changeImageSource('img5.jpg');
            break;
    }
}

// Function to change the image source
function changeImageSource(imageSource) {
    const selectedOption = colorSelect.options[colorSelect.selectedIndex].value;

    // Mapping the selected option to the corresponding image source
    const imageSources = {
        'Option 1': 'img/img1.jpg',
        'Option 2': 'img/img2.jpg',
        'Option 3': 'img/img3.jpg',
        'Option 4': 'img/img4.jpg',
        'Option 5': 'img/img5.jpg',
    }
    // Getting the image elem
    const image = document.querySelector('#images');

    // Change the image source based on the selected option
    image.src = imageSources[selectedOption];
}
// event listeners for on click event of buttons and select
customBgColorButton.addEventListener('click', changeCustomColor);
randomBgColorButton.addEventListener('click', changeRandomColor);
changeImageButton.addEventListener('click', changeImage);

// event listeners for on change event of select
colorSelect.addEventListener('change', changeImage);