import UICard from "./ui/card";

function RecipeList({ recipes }: { recipes: any[] }) {
  return (
    <>
      <div className="cardGrid">
        {recipes.map((recipe, idx) => (
          <UICard key={idx} {...recipe} />
        ))}
      </div>
    </>
  );
}

export default RecipeList;
