const apiKey = "b923e91b"; // Your OMDB API Key
const movieSection = document.getElementById("movie-section");
const generateMovieButton = document.getElementById("generate-movie");

// Fetch random movie data from OMDB API
async function fetchMovie() {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=movie&type=movie&r=json&plot=short`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if movies are returned
    if (data.Search && data.Search.length > 0) {
      const randomMovie =
        data.Search[Math.floor(Math.random() * data.Search.length)];
      displayMovie(randomMovie);
    } else {
      movieSection.innerHTML = "<p>No movies found. Try again.</p>";
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    movieSection.innerHTML =
      "<p>Error fetching movie. Please try again later.</p>";
  }
}

// Display movie information
function displayMovie(movie) {
  movieSection.innerHTML = `
        <div class="movie">
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="http://img.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}" alt="${movie.Title}">
            <p>IMDB ID: ${movie.imdbID}</p>
        </div>
    `;
}

// Generate random movie on button click
generateMovieButton.addEventListener("click", fetchMovie);
