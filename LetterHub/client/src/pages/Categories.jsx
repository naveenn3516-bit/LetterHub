import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import LetterCard from "../components/LetterCard";
import {
  getCategories,
  searchLetters
} from "../services/api";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [letters, setLetters] = useState([]);
  const [searchParams] = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoryData = await getCategories();
        setCategories(categoryData);

        if (search) {
          const letterData = await searchLetters(search);
          setLetters(letterData);
        } else {
          setLetters([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [search]);

  return (
    <section className="section page-section">
      <div className="container">
        {search ? (
          <>
            <span className="eyebrow">
              Search Results
            </span>

            <h1>
              Results for "{search}"
            </h1>

            <div className="letter-grid search-results">
              {letters.length > 0 ? (
                letters.map((letter) => (
                  <LetterCard
                    key={letter._id}
                    letter={letter}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <h3>No letters found</h3>
                  <p>
                    Try another search term.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <span className="eyebrow">
              Explore
            </span>

            <h1>All Letter Categories</h1>

            <p className="page-intro">
              Choose a category to find the letter
              format you need.
            </p>

            <div className="category-grid">
              {categories.map((category) => (
                <CategoryCard
                  key={category._id}
                  category={category}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Categories;