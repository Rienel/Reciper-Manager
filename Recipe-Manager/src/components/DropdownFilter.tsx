import React, { useState, useRef, useEffect } from "react";
import "../index.css";

interface DropdownFilterProps {
  label: string;
  options: string[];
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>{label}</button>
      {isOpen && (
        <div className="dropdownContent">
          {options.map((option, index) => (
            <a href="#" key={index}>
              {option}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
