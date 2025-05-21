import { useState } from "react";
import DropdownFilter from "./components/DropdownFilter";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import FilterIngredient from "./components/FilterIngredient";
import { RecipeForm } from "./components/RecipeForm";
import "./App.css";
import AddRecipe from "./components/AddRecipe";

function App() {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [search, setSearch] = useState("");

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

  const searchedRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="appContainer">
      <div className="header">
        <div className="searchBar">
          <Search onSearch={setSearch} />
        </div>

        <div className="filterCont">
          <DropdownFilter
            label="Category"
            options={["Breakfast", "Lunch", "Dinner", "Dessert"]}
          />
        </div>

        <div className="filterCont">
          <DropdownFilter
            label="Time"
            options={["< 30 mins", "1 hr", "1hr 30 mins", "> 2 hrs"]}
          />
        </div>

        <div className="filterIng">
          <FilterIngredient />
        </div>

        <div>
          <AddRecipe onAdd={handleCLick} />
        </div>
      </div>

      {isAdding && (
        <div className="modal-overlay">
          <div className="modal-content">
            <RecipeForm onSave={handleSave} onCancel={handleCancel} />
          </div>
        </div>
      )}

      <div className="RecipeLists">
        <RecipeList recipes={searchedRecipes} />
      </div>
    </div>
  );
}

export default App;
