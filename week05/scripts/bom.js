// HTML element references
const list = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

// Array to hold the chapters, using the getChapterList function or fallback to an empty array
let chaptersArray = getChapterList() || [];

// Populate the displayed list with chapters from the array
chaptersArray.forEach((chapter) => displayList(chapter));

// Event listener for adding a new chapter
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value); // Display the new chapter
        chaptersArray.push(input.value); // Add the chapter to the array
        setChapterList(); // Update localStorage with the new array
        input.value = ''; // Clear the input field
        input.focus(); // Set focus back to the input
    }
});

// Function to display a chapter in the list
function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    li.appendChild(deleteButton);
    list.appendChild(li);

    // Event listener for deleting a chapter
    deleteButton.addEventListener('click', function () {
        deleteChapter(li.textContent); // Call deleteChapter to remove it from array and storage
    });
}

// Function to update localStorage with the current chaptersArray
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to get the chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    // Remove the ❌ from the end of the chapter string
    chapter = chapter.slice(0, chapter.length - 1);

    // Filter the array to remove the selected chapter
    chaptersArray = chaptersArray.filter((item) => item !== chapter);

    // Update the localStorage with the modified array
    setChapterList();

    // Refresh the displayed list
    list.innerHTML = ''; // Clear the current list
    chaptersArray.forEach((chapter) => displayList(chapter)); // Rebuild the list
}
