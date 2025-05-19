import React from "react";

interface AddRecipeProp {
  onAdd: () => void;
}

const AddRecipe: React.FC<AddRecipeProp> = ({ onAdd }) => {
  return (
    <button className="btn btn-primary" onClick={onAdd}>
      + Recipe
    </button>
  );
};

export default AddRecipe;
