/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import Panel from "./Panel";

export default function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current || divElement.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOption = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
        {option.label}
      </div>
    );
  });

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const currentSelected = value?.label || "Select...";

  return (
    <div ref={divElement} className="w-44 relative">
      <Panel
        className="drop-down-title flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {currentSelected}
        {isOpen ? (
          <GoChevronUp className="text-lg" />
        ) : (
          <GoChevronDown className="text-lg" />
        )}
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full"> {renderedOption} </Panel>
      )}
    </div>
  );
}
