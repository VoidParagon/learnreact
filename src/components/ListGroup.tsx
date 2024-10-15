import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1)
  

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            // className="list-group-item active"
            className = {selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            // onClick={() => console.log("Clicked")}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
