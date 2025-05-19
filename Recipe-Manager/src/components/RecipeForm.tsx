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
    text: "",
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
    <div className="card" style={{ width: "18rem" }}>
      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <input
          className="card-title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          className="category"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />
        <input
          className="card-text"
          name="text"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          className="card-text"
          name="time"
          placeholder="Time"
          onChange={handleChange}
          required
        />
        <input
          className="card-text"
          name="servings"
          placeholder="Servings"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-success">
          Save
        </button>
        <button type="button" className="btn btn-info" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};
