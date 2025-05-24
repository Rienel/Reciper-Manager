import { useEffect, useState } from "react";
import DropdownFilter from "./components/DropdownFilter";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import FilterIngredient from "./components/FilterIngredient";
import { RecipeForm } from "./components/RecipeForm";
import "./App.css";
import AddRecipe from "./components/AddRecipe";

interface Recipe {
  image: string;
  title: string;
  recipe: string;
  instructions: string;
  category: string;
  time: string;
  servings: string;
  ingredients: string[];
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [timeFilter, setTimeFilter] = useState("");
  const [ingredientFilter, setIngredientFilter] = useState<string[]>([]);
  const [availableIngredients, setAvailableIngredients] = useState<string[]>(
    []
  );

  useEffect(() => {
    try {
      const storedRecipes = localStorage.getItem("recipes");
      console.log("Loading from localStorage:", storedRecipes);
      if (storedRecipes) {
        const parsedRecipes: Recipe[] = JSON.parse(storedRecipes);
        if (Array.isArray(parsedRecipes)) {
          setRecipes(parsedRecipes);
          console.log("Recipes loaded:", parsedRecipes);
        } else {
          console.error("Stored recipes is not an array");
          localStorage.removeItem("recipes");
        }
      } else {
        console.log("No recipes in localStorage");
      }
    } catch (err) {
      console.error("Failed to load recipes from localStorage:", err);
      localStorage.removeItem("recipes");
    }
  }, []);

  useEffect(() => {
    try {
      console.log("Saving recipes to localStorage:", recipes);
      localStorage.setItem("recipes", JSON.stringify(recipes));

      const allIngredients = recipes
        .flatMap((recipe) => recipe.ingredients)
        .filter((ingredient) => ingredient.trim() !== "");
      const uniqueIngredients = [...new Set(allIngredients)].sort();
      setAvailableIngredients(uniqueIngredients);
      console.log("Available ingredients updated:", uniqueIngredients);
    } catch (err) {
      console.error("Failed to save recipes to localStorage:", err);
    }
  }, [recipes]);

  const handleClick = () => {
    setIsAdding(true);
  };

  const handleSave = (newRecipe: Recipe) => {
    console.log("Saving new recipe:", newRecipe);
    setRecipes((prev) => {
      const updatedRecipes = [...prev, newRecipe];
      console.log("Updated recipes state:", updatedRecipes);
      return updatedRecipes;
    });
    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
  };

  const handleClearRecipes = () => {
    setRecipes([]);
    setAvailableIngredients([]);
    localStorage.removeItem("recipes");
    console.log("Recipes and ingredients cleared from localStorage");
  };

  const filterRecipes = recipes.filter((recipe) => {
    const matchSearch = recipe.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory = categoryFilter
      ? recipe.category === categoryFilter
      : true;
    const matchTime = timeFilter ? recipe.time === timeFilter : true;
    const matchIngredients = ingredientFilter.length
      ? ingredientFilter.every((ing) =>
          recipe.ingredients.some((recipeIng) =>
            recipeIng.toLowerCase().includes(ing.toLowerCase())
          )
        )
      : true;
    return matchCategory && matchSearch && matchTime && matchIngredients;
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
          <FilterIngredient
            onFilter={setIngredientFilter}
            availableIngredients={availableIngredients}
          />
        </div>

        <div>
          <AddRecipe onAdd={handleClick} />
        </div>

        <button
          className="btn btn-danger"
          onClick={handleClearRecipes}
          style={{ margin: "0.5rem" }}
        >
          Clear Recipes
        </button>
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
