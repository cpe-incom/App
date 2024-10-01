// Get DOM elements
const addSetBtn = document.getElementById('addSetBtn');
const saveWorkoutBtn = document.getElementById('saveWorkoutBtn');
const exerciseDiv = document.querySelector('.exercise');

// Load saved workout on page load
document.addEventListener('DOMContentLoaded', loadSavedWorkout);

// Handle adding new sets
addSetBtn.addEventListener('click', function() {
    addNewSet();
});

// Function to add a new set row dynamically
function addNewSet(kg = '', reps = '', completed = false) {
    const setDiv = document.createElement('div');
    setDiv.classList.add('set-row');
    
    setDiv.innerHTML = `
        <input type="text" class="input-number" placeholder="Kg" maxlength="3" value="${kg}">
        <input type="text" class="input-number" placeholder="Reps" maxlength="3" value="${reps}">
        <input type="checkbox" class="set-complete" ${completed ? 'checked' : ''}>
    `;

    exerciseDiv.appendChild(setDiv);
}

// Handle saving the current workout
saveWorkoutBtn.addEventListener('click', function() {
    const workoutData = [];
    const setRows = exerciseDiv.querySelectorAll('.set-row');

    setRows.forEach(row => {
        const kg = row.querySelector('.input-number:nth-of-type(1)').value;
        const reps = row.querySelector('.input-number:nth-of-type(2)').value;
        const completed = row.querySelector('.set-complete').checked;

        workoutData.push({
            kg,
            reps,
            completed
        });
    });

    localStorage.setItem('savedWorkout', JSON.stringify(workoutData));
    alert('Workout saved!');
});

// Load saved workout from localStorage
function loadSavedWorkout() {
    const savedWorkout = localStorage.getItem('savedWorkout');
    if (savedWorkout) {
        const workoutData = JSON.parse(savedWorkout);
        workoutData.forEach(set => {
            addNewSet(set.kg, set.reps, set.completed);
        });
    }
}
