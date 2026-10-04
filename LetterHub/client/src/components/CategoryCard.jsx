import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="category-card"
    >
      <div className="category-icon">
        {category.icon}
      </div>

      <h3>{category.name}</h3>

      <p>{category.description}</p>

      <span>
        View letters →
      </span>
    </Link>
  );
}

export default CategoryCard;