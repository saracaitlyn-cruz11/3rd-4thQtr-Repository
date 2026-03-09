document.addEventListener('DOMContentLoaded', () => {
const stars = document.querySelectorAll('.stars i');
const ratingInput = document.getElementById('rating-value');
const form = document.getElementById('movie-form');
const movieListContainer = document.getElementById('movie-list-container');
let currentRating = 0;

    // rating stars function
stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            ratingInput.value = currentRating;
            updateStars(currentRating);
        });
        star.addEventListener('mouseover', () => updateStars(index + 1));
    });

    document.querySelector('.stars').addEventListener('mouseleave', () => updateStars(currentRating));

    function updateStars(rating) {
        stars.forEach((star, index) => {
            star.style.color = index < rating ? "#fbbf24" : "#cbd5e1";
        });
    }

    // adding movie, deleting movie, updating movie funcitons
    
    //average rating
    function displayMovies() {
        const movies = JSON.parse(localStorage.getItem('movies')) || [];
        movieListContainer.innerHTML = '';

        movies.forEach((movie, index) => {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie-item';
            
            let starIcons = '';
            const roundedRating = Math.round(parseFloat(movie.rating));
            for (let i = 1; i <= 5; i++) {
                starIcons += `<i class="fa-solid fa-star" style="color: ${i <= roundedRating ? '#fbbf24' : '#cbd5e1'}"></i>`;
            }

            movieDiv.innerHTML = `
                <div class="movie-content">
                    <p><strong>${movie.title} (${movie.year})</strong> - ${movie.genre}, Rating: ${starIcons}</p>
                    <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
                </div>
            `;
            movieListContainer.appendChild(movieDiv);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (currentRating === 0) return alert("Please select a rating!");

        const title = document.getElementById('title').value.trim();
        const year = document.getElementById('year').value;
        const genre = document.getElementById('genre').value;
        
        let movies = JSON.parse(localStorage.getItem('movies')) || [];
        
        const existingIndex = movies.findIndex(m => m.title.toLowerCase() === title.toLowerCase());

        if (existingIndex !== -1) {
            const oldRating = parseFloat(movies[existingIndex].rating);
            const newRating = (oldRating + currentRating) / 2;
            
            movies[existingIndex].rating = newRating.toFixed(2); 
            movies[existingIndex].year = year; 
            movies[existingIndex].genre = genre;
            alert('Existing movie found. Rating averaged!');
        } else {
            movies.push({ title, year, genre, rating: currentRating.toString() });
        }

        localStorage.setItem('movies', JSON.stringify(movies));
        form.reset();
        currentRating = 0;
        updateStars(0);
        displayMovies();
    });

    window.deleteMovie = function(index) {
        if (confirm("Are you sure you want to delete?")) {
            let movies = JSON.parse(localStorage.getItem('movies')) || [];
            movies.splice(index, 1);
            localStorage.setItem('movies', JSON.stringify(movies));
            displayMovies();
        }
    };

    displayMovies();
});