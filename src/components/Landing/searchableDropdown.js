import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import FormControl from "react-bootstrap/FormControl";

function capitalizeFLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter((child) => {
            let name = child.props.children.props.children;
            return !value || name.toLowerCase().startsWith(value.toLowerCase());
          })}
        </ul>
      </div>
    );
  }
);

function getNames(item, language) {
  if (typeof item.name === "string") {
    return capitalizeFLetter(item.name);
  } else {
    const lc = language.code;
    const name = lc in item.name ? item.name[lc] : item.name["en"];
    return name;
  }
}

function SearchableDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        {props.currentItem
          ? getNames(props.currentItem, props.currentLanguage)
          : props.title}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu}>
        {props.items.map((item) => (
          <Dropdown.Item key={item.name}>
            <div onClick={() => props.setItem(item)}>
              {getNames(item, props.currentLanguage)}
            </div>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SearchableDropdown;
