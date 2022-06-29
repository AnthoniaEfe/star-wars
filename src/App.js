import { useEffect, useState } from "react";

function App() {
  const [endPoints, setEndPoints] = useState({});
  useEffect(() => {
    fetch("https://swapi.dev/api/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEndPoints(data);
        console.log(data);
      });
  }, []);

  console.log(endPoints);
  return (
    <div className="container">
      <header>
        <h1>Star Wars Fan Page</h1>
        <p>This is a star wars fan page about star wars.</p>
      </header>

      <main>
        <div className="links">
          <a href={`${endPoints.people}`}>People</a>
          <a href={`${endPoints.vehicles}`}>Vehicles</a>
          <a href={`${endPoints.starships}`}>Starships</a>
          <a href={`${endPoints.planets}`}>Planets</a>
          <a href={`${endPoints.films}`}>Films</a>
          <a href={`${endPoints.species}`}>Species</a>
        </div>
      </main>
    </div>
  );
}

export default App;
