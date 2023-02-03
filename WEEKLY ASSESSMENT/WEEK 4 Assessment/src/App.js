import React, { useState } from "react";

const items = [
  { id: 1, name: "Inception", type: "movie" },
  { id: 2, name: "The Matrix", type: "movie" },
  { id: 3, name: "Interstellar", type: "movie" },
  { id: 4, name: "The Shawshank Redemption", type: "movie" },
  { id: 5, name: "The Godfather", type: "movie" },
  { id: 6, name: "The Dark Knight", type: "movie" },
  { id: 7, name: "Pulp Fiction", type: "movie" },
  {
    id: 8,
    name: "The Lord of the Rings: The Return of the King",
    type: "movie",
  },
  { id: 9, name: "The Good, the Bad and the Ugly", type: "movie" },
  { id: 10, name: "Fight Club", type: "movie" },
  { id: 11, name: "Tesla Model S", type: "car" },
  { id: 12, name: "Lamborghini Huracan", type: "car" },
  { id: 13, name: "Bugatti Chiron", type: "car" },
  { id: 14, name: "McLaren 720S", type: "car" },
  { id: 15, name: "Porsche 911 GT3", type: "car" },
  { id: 16, name: "Audi R8", type: "car" },
  { id: 17, name: "Ferrari 488 GTB", type: "car" },
  { id: 18, name: "Nissan GT-R", type: "car" },
  { id: 19, name: "Aston Martin DB11", type: "car" },
  { id: 20, name: "Chevrolet Corvette C8", type: "car" },
  { id: 21, name: "Harry Potter", type: "character" },
  { id: 22, name: "Iron Man", type: "character" },
  { id: 23, name: "Neo", type: "character" },
  { id: 24, name: "Indiana Jones", type: "character" },
  { id: 25, name: "Luke Skywalker", type: "character" },
  { id: 26, name: "Thor", type: "character" },
  { id: 27, name: "Hulk", type: "character" },
  { id: 28, name: "Captain America", type: "character" },
  { id: 29, name: "Wolverine", type: "character" },
  { id: 30, name: "Deadpool", type: "character" },
];


function App() {
  const [type, setType] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleType = (event) => {
    setType(event.target.value);
    setFilteredItems(
      items.filter(
        (item) => event.target.value === "" || item.type === event.target.value
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={type}
        onChange={handleType}
        placeholder="Type..."
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}> {item.type } => {item.name}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
