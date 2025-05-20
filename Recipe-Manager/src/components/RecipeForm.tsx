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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(recipe);
  };

  return (
    <div className="CardContainer">
      <form onSubmit={handleSubmit} className="CardFormWrapper">
        <div className="CardImageHolder">Recipe Image</div>

        <div className="CardContent">
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            required
          />
          <input
            name="category"
            placeholder="Category (e.g. Breakfast)"
            onChange={handleChange}
            required
          />

          <textarea
            name="text"
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
            name="time"
            placeholder="Time (e.g. 25 min)"
            onChange={handleChange}
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
