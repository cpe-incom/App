// Get form elements
const workoutForm = document.getElementById('workoutForm');
const workoutHistory = document.getElementById('workoutHistory');

// Load saved workouts from localStorage when the page loads
document.addEventListener('DOMContentLoaded', loadWorkouts);

// Handle form submission
workoutForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the form data
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;

    // Create a workout object
    const workout = {
        exercise: exercise,
        sets: sets,
        reps: reps,
        weight: weight
    };

    // Save workout to localStorage
    saveWorkout(workout);

    // Clear the form
    workoutForm.reset();

    // Reload workouts
    loadWorkouts();
});

// Function to save a workout to localStorage
function saveWorkout(workout) {
    let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(workouts));
}

// Function to load workouts from localStorage
function loadWorkouts() {
    // Clear the current workout history list
    workoutHistory.innerHTML = '';

    // Get the workouts from localStorage
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    // Display each workout in the history
    workouts.forEach((workout, index) => {
        const workoutItem = document.createElement('li');
        workoutItem.textContent = `${workout.exercise}: ${workout.sets} sets of ${workout.reps} reps (${workout.weight} kg)`;
        workoutHistory.appendChild(workoutItem);
    });
}
