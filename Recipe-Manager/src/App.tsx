import DropdownFilter from "./components/DropdownFilter";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import "./App.css";
import AddRecipe from "./components/AddRecipe";

function App() {
  return (
    <div>
      <div className="header">
        <div className="searchBar">
          <Search />
        </div>

        <div className="filterCategory">
          <DropdownFilter
            label="Category"
            options={["Breakfast", "Lunch", "Dinner", "Dessert"]}
          />
        </div>

        <div className="filterTime">
          <DropdownFilter
            label="Time"
            options={["< 30 mins", "1 hr", "1hr 30 mins", "> 2 hrs"]}
          />
        </div>

        <div>
          <RecipeList />
        </div>
      </div>

      {/* TODO: implement view and edit  */}
    </div>
  );
}

export default App;
