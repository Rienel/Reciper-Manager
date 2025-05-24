import React, { useState } from "react";
import "../index.css";

interface RecipeFormProps {
  onSave: (recipe: any) => void;
  onCancel: () => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({ onCancel, onSave }) => {
  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    recipe: "",
    instructions: "",
    category: "",
    time: "",
    servings: "",
    ingredients: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleCategorySelect = (category: string) => {
    setRecipe((prev) => ({ ...prev, category }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(recipe);
    setRecipe({
      image: "",
      title: "",
      recipe: "",
      instructions: "",
      category: "",
      time: "",
      servings: "",
      ingredients: [],
    });
  };

  return (
    <div className="CardContainer">
      <form onSubmit={handleSubmit} className="CardFormWrapper">
        <div className="CardImageHolder">Recipe Image</div>

        <div className="CardContent">
          <input
            name="title"
            placeholder="Recipe Title"
            value={recipe.title}
            onChange={handleChange}
            required
          />

          <div className="category-options">
            {["Breakfast", "Lunch", "Brunch", "Dinner", "Dessert"].map(
              (cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`category-btn ${
                    recipe.category === cat ? "selected" : ""
                  }`}
                  onClick={() => handleCategorySelect(cat)}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          <textarea
            name="recipe"
            placeholder="Ingredients (one per line)"
            value={recipe.recipe}
            onChange={handleChange}
            required
          />
          <textarea
            name="instructions"
            placeholder="Instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
          <select
            name="time"
            value={recipe.time}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="" disabled>
              Select Time
            </option>
            {["< 30 mins", "1 hr", "1hr 30 mins", "> 2 hrs"].map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <input
            name="servings"
            placeholder="Servings (e.g. 2)"
            value={recipe.servings}
            onChange={handleChange}
            required
          />
        </div>

        <div className="CardBtn">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-info" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
