import React, { useState, useRef, useEffect } from "react";
import "../index.css";

interface DropdownFilterProps {
  label: string;
  options: string[];
  onSelected: (term: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({
  label,
  options,
  onSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    onSelected(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

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
    <div className="custome-dropdown" ref={dropdownRef}>
      <button className="dropdown-btn" onClick={toggleDropdown}>
        {label}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(option)}
            >
              <a className="dropdown-item" key={index}>
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownFilter;
