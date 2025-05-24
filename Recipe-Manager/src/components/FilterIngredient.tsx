import React, { useState, useEffect, useRef } from "react";
import "../index.css";

interface FilterIngredientProps {
  onFilter: (ingredients: string[]) => void;
}

const FilterIngredient: React.FC<FilterIngredientProps> = ({ onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sample ingredients list (can be dynamic in a real app)
  const availableIngredients = [
    "Chicken",
    "Beef",
    "Vegetables",
    "Cheese",
    "Pasta",
    "Tomato",
    "Eggs",
    "Milk",
  ];

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleIngredientToggle = (ingredient: string) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  useEffect(() => {
    onFilter(selectedIngredients);
  }, [selectedIngredients, onFilter]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        Ingredients{" "}
        {selectedIngredients.length > 0
          ? `(${selectedIngredients.length})`
          : ""}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {availableIngredients.map((ingredient) => (
            <li
              key={ingredient}
              className={`dropdown-item ${
                selectedIngredients.includes(ingredient) ? "selected" : ""
              }`}
              onClick={() => handleIngredientToggle(ingredient)}
            >
              {ingredient}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterIngredient;
