function RecipeList() {
  let category = ["Breakfast", "Lunch", "Dinner", "Dessert"];
  category = [];

  return (
    <>
      <h1>My Recipes</h1>
      {category.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {category.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default RecipeList;
