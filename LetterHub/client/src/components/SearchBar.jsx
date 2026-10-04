import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({ large = false }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/categories?search=${encodeURIComponent(search.trim())}`);
  };

  return (
    <form
      className={`search-form ${large ? "search-large" : ""}`}
      onSubmit={handleSubmit}
    >
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search for a letter..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;