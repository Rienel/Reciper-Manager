import { useState } from "react";

function RecipeList() {
  let category = ["Breakfast", "Lunch", "Dinner", "Dessert"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>My Recipes</h1>
      {category.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {category.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
