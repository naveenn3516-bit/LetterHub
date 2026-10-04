import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import LetterCard from "../components/LetterCard";
import { getCategories, getFeaturedLetters } from "../services/api";

function Home() {
  const [categories, setCategories] = useState([]);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categoryData, letterData] = await Promise.all([
          getCategories(),
          getFeaturedLetters()
        ]);

        setCategories(categoryData);
        setLetters(letterData);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (

    <>
      <section className="hero">
        <div className="container hero-content">
          <span className="hero-badge">
            ✦ Simple • Clear • Correct
          </span><br />
          <div class="social-links">
            <strong>
            <a href="https://www.linkedin.com/in/naveen-k-p-4556b738b?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a><br />
          </strong>
          <strong>
            <a href="https://github.com/naveenn3516-bit">GitHub</a>
          </strong>
          <strong>
            <a href="http://www.youtube.com/@noobkingdaa">Youtube</a>
          </strong>
          </div>
          <h1>
            Don't know how to
            <span> write a letter?</span>
          </h1>

          <p>
            Find the correct letter format, see a complete
            example, understand what to change, and write
            your letter confidently.
          </p>
          <SearchBar large />

          <div className="hero-stats">
            <div>
              <strong>50+</strong>
              <span>Letter Formats</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Categories</span>
            </div>

            <div>
              <strong>100%</strong>
              <span>Free Reference</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Explore</span>
              <h2>Letter Categories</h2>
            </div>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category._id}
                category={category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Popular</span>
              <h2>Popular Letter Formats</h2>
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

      <section className="how-section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">How it works</span>
            <h2>Write the right letter in 3 steps</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Find</h3>
              <p>
                Search for the letter you need.
              </p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Understand</h3>
              <p>
                See the complete format and learn
                what information to replace.
              </p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Write</h3>
              <p>
                Write the format on paper using
                your own details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;