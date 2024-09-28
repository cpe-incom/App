// Get DOM elements
const addSetBtn = document.getElementById('addSetBtn');
const exerciseDiv = document.querySelector('.exercise');

// Handle adding new sets
addSetBtn.addEventListener('click', function() {
    const setDiv = document.createElement('div');
    setDiv.classList.add('set-row');
    
    setDiv.innerHTML = `
        <input type="text" class="input-number" placeholder="Kg" maxlength="3">
        <input type="text" class="input-number" placeholder="Reps" maxlength="3">
        <input type="checkbox" class="set-complete">
    `;

    exerciseDiv.appendChild(setDiv);
});
