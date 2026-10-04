import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LetterCard from "../components/LetterCard";
import {
  getCategoryBySlug,
  getLettersByCategory
} from "../services/api";

function CategoryLetters() {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const categoryData =
          await getCategoryBySlug(slug);

        const letterData =
          await getLettersByCategory(slug);

        setCategory(categoryData);
        setLetters(letterData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, [slug]);

  if (!category) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <section className="section page-section">
      <div className="container">
        <Link to="/categories" className="back-link">
          ← All Categories
        </Link>

        <div className="category-header">
          <div className="large-category-icon">
            {category.icon}
          </div>

          <div>
            <span className="eyebrow">
              Category
            </span>

            <h1>{category.name}</h1>

            <p>{category.description}</p>
          </div>
        </div>

        <div className="letter-grid">
          {letters.map((letter) => (
            <LetterCard
              key={letter._id}
              letter={letter}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryLetters;