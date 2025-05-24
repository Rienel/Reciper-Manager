import { useEffect, useState } from "react";
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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");

  useEffect(() => {
    const storedRecipes = localStorage.getItem("recipes");
    if (storedRecipes) {
      try {
        setRecipes(JSON.parse(storedRecipes));
      } catch (err) {
        console.error("Failed to parse stored recipes:", err);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

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

  const filterRecipes = recipes.filter((recipe) => {
    const matchSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = categoryFilter
      ? recipe.category === categoryFilter
      : true;
    const matchTime = timeFilter ? recipe.time === timeFilter : true;
    return matchCategory && matchSearch && matchTime;
  });

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
            onSelected={(value) => setCategoryFilter(value)}
          />
        </div>

        <div className="filterCont">
          <DropdownFilter
            label="Time"
            options={["< 30 mins", "1 hr", "1hr 30 mins", "> 2 hrs"]}
            onSelected={(value) => setTimeFilter(value)}
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
        <RecipeList recipes={filterRecipes} />
      </div>
    </div>
  );
}

export default App;
