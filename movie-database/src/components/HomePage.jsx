// import React, { useState, useEffect } from "react";
// import SearchBar from "./SearchBar";
// import Filter from "./Filter";
// import MovieList from "./MovieList";

// const HomePage = ({ onSelectMovie }) => {
//   const [movies, setMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filters, setFilters] = useState({ genre: "", rating: "" });

//   // Load movies from local JSON
//   useEffect(() => {
//     fetch("/movies.json")
//       .then((res) => res.json())
//       .the
// n((data) => {
//         setMovies(data);
//         setFilteredMovies(data);
//       })
//       .catch((err) => console.error("Error loading movies:", err));
//   }, []);

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     filterMovies(query, filters);
//   };

//   const handleFilter = (newFilters) => {
//     setFilters(newFilters);
//     filterMovies(searchQuery, newFilters);
//   };

//   const filterMovies = (query, filters) => {
//     let filtered = movies.filter((m) =>
//       m.title.toLowerCase().includes(query.toLowerCase())
//     );
//     if (filters.genre) filtered = filtered.filter((m) => m.genre.includes(filters.genre));
//     if (filters.rating) filtered = filtered.filter((m) => m.vote_average >= parseFloat(filters.rating));
//     setFilteredMovies(filtered);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Hero Section */}
//       <div className="bg-blue-700 text-white p-12 text-center">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Movie Dashboard</h1>
//         <p className="text-lg">Discover, search, and filter your favorite movies!</p>
//       </div>

//       {/* Search + Filter */}
//       <div className="p-6">
//         <SearchBar onSearch={handleSearch} />
//         <Filter filters={filters} onChange={handleFilter} />
//       </div>

//       {/* Featured / All Movies */}
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Movies</h2>
//         <MovieList movies={filteredMovies} onSelect={onSelectMovie} />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
