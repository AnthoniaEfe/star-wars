import { useEffect, useState } from "react";
import Card from "./cardComponent";

function App() {
  // const [selectedItem, setSelectedItem] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data.results);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Star Wars Fan Page</h1>
        <p>This is a star wars fan page about star wars.</p>
      </header>

      <main>
        <div className="links">
          <a href="">People</a>
          <a href="">Vehicles</a>
          <a href="">Starships</a>
          <a href="">Planets</a>
          <a href="">Films</a>
          <a href="">Species</a>
        </div>

        <div className="list-container">
          <h2 className="list-title">People</h2>
          <div className="list">
            {items.map((item, index) => (
              <Card item={item} key={index}/>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
