import { useState } from "react";
import UICard from "./ui/card";
import AddRecipe from "./AddRecipe";
import { RecipeForm } from "./RecipeForm";

function RecipeList() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleCLick = () => {
    setIsAdding(true);
  };

  const handleSave = (newRecipe: any) => {
    setRecipes((prev) => [...prev, newRecipe]);
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  return (
    <>
      <AddRecipe onAdd={handleCLick} />
      {/* TODO: make ui pop up */}
      {isAdding && (
        <div className="modal-overlay">
          <div className="modal-content">
            <RecipeForm onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}
      {recipes.map((recipe, idx) => (
        <UICard key={idx} {...recipe} />
      ))}
    </>
  );
}

export default RecipeList;
