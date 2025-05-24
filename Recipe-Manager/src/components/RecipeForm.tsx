import React, { useState } from "react";

interface ReciperFormProps {
  onSave: (recipe: any) => void;
  onCancel: () => void;
}

export const RecipeForm: React.FC<ReciperFormProps> = ({
  onCancel,
  onSave,
}) => {
  const [recipe, setRecipe] = useState({
    image: "",
    title: "",
    recipe: "",
    instructions: "",
    category: "",
    time: "",
    servings: "",
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
  };

  return (
    <div className="CardContainer">
      <form onSubmit={handleSubmit} className="CardFormWrapper">
        <div className="CardImageHolder">Recipe Image</div>

        {/* TODO: instead of input, make it select instead */}
        <div className="CardContent">
          <input
            name="title"
            placeholder="Title"
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
            placeholder="Recipe"
            onChange={handleChange}
            required
          />
          <textarea
            name="instructions"
            placeholder="Instruction"
            onChange={handleChange}
            required
          />
          <input
            type="time"
            name="time"
            value={recipe.time}
            onChange={(e) =>
              setRecipe((prev) => ({ ...prev, time: e.target.value }))
            }
            required
          />

          <input
            name="servings"
            placeholder="Servings (e.g. 2)"
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
