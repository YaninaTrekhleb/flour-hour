import { useState } from 'react';

export function IngredientsSection({ ingredients }) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!ingredients || ingredients.length === 0) {
    return null;
  }

  return (
    <section className="ingredients-section">
      <button
        className="ingredients-toggle"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="ingredients-toggle-text">Ingredients</span>
        <span className="ingredients-toggle-icon">{isExpanded ? '−' : '+'}</span>
      </button>

      {isExpanded && (
        <ul className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-item">
              {ingredient}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
