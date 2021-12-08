import React from "react";
import "./hover-dropdown.style.scss";
export default function HoverDropdown({
  list = [],
  selected,
  onClick,
  message,
}) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hover-dropdown-main"
    >
      <h6>
        <span>{selected || message}</span>
        <span>{">"}</span>
      </h6>
      <ul style={hovered ? { height: `${35 * list.length}px` } : { height: 0 }}>
        {list.map((obj) => (
          <li onClick={() => onClick(obj)} key={obj.id}>
            {obj.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
