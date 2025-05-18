import { useState } from "react";
import UICard from "./ui/card";

function RecipeList() {
  return (
    <>
      <UICard
        image="https://imgs.search.brave.com/Q55v0IDyWa7FPdFGEgxiIq-Wl2VPxI4otkdgi-FjqS4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MjM5MTQ2My9waG90/by9wYXN0YS1jYXJi/b25hcmEuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTdnTzlt/UmVORnpZMTBxc211/X1g0X0xaNDUtVWNW/UHR6cEhGLURPRnA2/Q2M9"
        title="Pasta"
        category="Dinner"
        text="I love creamy pasta"
        time="30 mins"
        servings="2 people"
        linkView="#"
        linkEdit="#"
      />
    </>
  );
}

export default RecipeList;
