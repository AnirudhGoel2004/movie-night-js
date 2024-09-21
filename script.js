const apiKey = "b923e91b"; // Your OMDB API Key
const movieSection = document.getElementById("movie-section");
const generateMovieButton = document.getElementById("generate-movie");

// List of 200+ random IMDb IDs for movies
const randomMovieIDs = [
  "tt3896198",
  "tt0111161",
  "tt1375666",
  "tt0848228",
  "tt0133093",
  "tt6751668",
  "tt0109830",
  "tt0114369",
  "tt4154796",
  "tt1853728",
  "tt0110912",
  "tt0068646",
  "tt0071562",
  "tt0468569",
  "tt0102926",
  "tt0137523",
  "tt0120737",
  "tt0088763",
  "tt0120815",
  "tt0167260",
  "tt0499549",
  "tt4154756",
  "tt0361748",
  "tt0137523",
  // Add 150+ more IMDb IDs here
  "tt0120689",
  "tt0082971",
  "tt1375666",
  "tt0110357",
  "tt0107290",
  "tt0407887",
  "tt0081505",
  "tt0114814",
  "tt0317705",
  "tt0347149",
  "tt0338013",
  "tt0108778",
  "tt0110357",
  "tt0120815",
  "tt0110912",
  "tt0103064",
  "tt0114709",
  "tt0119217",
  "tt0108778",
  "tt1345836",
  "tt0133093",
  "tt0080684",
  "tt1375666",
  "tt0110413",
  "tt0295297",
  "tt0120586",
  "tt0088763",
  "tt0332280",
  "tt0118715",
  "tt0086190",
  "tt0372784",
  "tt0083658",
  "tt0416449",
  "tt0245429",
  "tt0317248",
  "tt0268978",
  "tt0477348",
  "tt1049413",
  "tt0112573",
  "tt0407887",
  "tt0266697",
  "tt1853728",
  "tt0120338",
  "tt0118715",
  "tt0151804",
  "tt0112573",
  "tt1979320",
  "tt0110912",
];

// Fetch movie data from OMDB API using a random IMDb ID
async function fetchMovie() {
  // Hide the movie section before fetching new data
  movieSection.style.display = "none";

  // Select a random IMDb ID from the list
  const randomID =
    randomMovieIDs[Math.floor(Math.random() * randomMovieIDs.length)];
  const url = `https://www.omdbapi.com/?i=${randomID}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Check if the movie data was found
    if (data && data.Response === "True") {
      displayMovie(data);
    } else {
      movieSection.innerHTML = "<p>No movie found. Try again.</p>";
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
    movieSection.innerHTML =
      "<p>Error fetching movie. Please try again later.</p>";
  }
}

// Display movie information
function displayMovie(movie) {
  // Add movie details with smooth transition
  movieSection.innerHTML = `
        <div class="movie">
            <h2>${movie.Title} (${movie.Year})</h2>
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p>${movie.Plot}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>IMDb Rating: ${movie.imdbRating}</p>
            <p>Director: ${movie.Director}</p>
        </div>
    `;
  movieSection.style.display = "block";
  movieSection.style.opacity = "1";
}

// Generate random movie on button click
generateMovieButton.addEventListener("click", fetchMovie);
