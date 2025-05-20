import DropdownFilter from "./components/DropdownFilter";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <div className="header">
        <div className="searchBar">
          <Search />
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
      </div>
      <div className="RecipeLists">
        <div>
          <RecipeList />
        </div>
      </div>
      {/* TODO: implement view and edit  */}
    </div>
  );
}

export default App;
