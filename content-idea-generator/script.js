document.getElementById('generateBtn').addEventListener('click', function() {
    const keyword = document.getElementById('keywordInput').value.trim();
    if (keyword) {
        generateIdea(keyword);
    }
});

function generateIdea(keyword) {
    const ideas = [
        `How to effectively use ${keyword} in your daily routine`,
        `Top 10 tips for mastering ${keyword}`,
        `The history of ${keyword} and its impact on modern society`,
        `Why ${keyword} is important for your business`,
        `The future of ${keyword} in the next decade`
    ];

    const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
    displayIdea(randomIdea);
}

function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');
    const ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';
    ideaItem.textContent = idea;
    ideasContainer.appendChild(ideaItem);
}


function displayIdea(idea) {
    const ideasContainer = document.getElementById('ideasContainer');
    const ideaItem = document.createElement('div');
    ideaItem.className = 'idea-item';
    ideaItem.innerHTML = `
        <span>${idea}</span>
        <button class="saveBtn">Save</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;
    
    ideasContainer.appendChild(ideaItem);

    // Add event listeners for the buttons
    ideaItem.querySelector('.saveBtn').addEventListener('click', saveIdea);
    ideaItem.querySelector('.editBtn').addEventListener('click', editIdea);
    ideaItem.querySelector('.deleteBtn').addEventListener('click', deleteIdea);
}

function saveIdea(event) {
    // Logic to save the idea (e.g., store in localStorage)
    const idea = event.target.parentElement.querySelector('span').textContent;
    console.log(`Saving idea: ${idea}`);
}

function editIdea(event) {
    // Logic to edit the idea
    const ideaElement = event.target.parentElement.querySelector('span');
    const newIdea = prompt('Edit your idea:', ideaElement.textContent);
    if (newIdea) {
        ideaElement.textContent = newIdea;
    }
}

function deleteIdea(event) {
    // Logic to delete the idea
    const ideaItem = event.target.parentElement;
    ideaItem.remove();
}
