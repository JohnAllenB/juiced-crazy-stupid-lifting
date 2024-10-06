document.getElementById('workoutForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const workoutDate = document.getElementById('workoutDate').value;
  const workoutTitle = document.getElementById('workoutTitle').value;
  
  const exercises = [];
  document.querySelectorAll('.exercise').forEach(exercise => {
      const name = exercise.querySelector('.exerciseName').value;
      const sets = exercise.querySelector('.sets').value;
      const reps = exercise.querySelector('.reps').value;
      const weight = exercise.querySelector('.weight').value;  // Capture weight
      exercises.push({ name, sets, reps, weight });
  });
  
  addWorkoutCard(workoutDate, workoutTitle, exercises);
  this.reset(); // Reset the form
});

document.getElementById('addExerciseBtn').addEventListener('click', function () {
  const newExercise = document.createElement('div');
  newExercise.classList.add('exercise');
  newExercise.innerHTML = `
      <label for="exerciseName">Exercise Name:</label>
      <input type="text" class="exerciseName" placeholder="e.g., Bench Press" required>
      
      <label for="sets">Sets:</label>
      <input type="number" class="sets" min="1" placeholder="Sets" required>
      
      <label for="reps">Reps:</label>
      <input type="number" class="reps" min="1" placeholder="Reps" required>

      <label for="weight">Weight (lbs):</label>
      <input type="number" class="weight" min="0" placeholder="Weight" required>
  `;
  document.getElementById('exerciseFields').appendChild(newExercise);
});

function addWorkoutCard(date, title, exercises) {
  const workoutCards = document.getElementById('workoutCards');
  const card = document.createElement('div');
  card.classList.add('card');
  
  card.innerHTML = `
      <h3>${date} - ${title}</h3>
      ${exercises.map(exercise => `
          <div class="exercise-detail">
              <strong>${exercise.name}</strong> - ${exercise.sets} sets, ${exercise.reps} reps, ${exercise.weight} lbs
          </div>
      `).join('')}
  `;
  
  workoutCards.appendChild(card);
}
