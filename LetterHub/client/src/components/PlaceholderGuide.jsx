function PlaceholderGuide({ placeholders = [] }) {
  return (
    <section className="guide-box">
      <h2>✏️ What should you replace?</h2>

      <p>
        Use your own details in place of the information
        shown in the example.
      </p>

      <div className="placeholder-list">
        {placeholders.map((item, index) => (
          <div className="placeholder-item" key={index}>
            <span>{index + 1}</span>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlaceholderGuide;