import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [albums, setAlbums] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data = await response.json();
    setAlbums(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fillterData = async (e) => {
    console.log(e);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/?id=${e}`
    );
    const data = await response.json();
    e ? setAlbums(data) : fetchData();
  };
  return (
    <>
      <div className="inputFilter">
        <input type="input" onChange={(e) => fillterData(e.target.value)} placeholder="Write ID"/>
      </div>
      <div className="albums">
        {albums.length > 0 ? (
          albums.map((album, i) => {
            return (
              <div key={i} className="album">
                <h2>Album Number {album.id}</h2>
                <p>{album.title}</p>
              </div>
            );
          })
        ) : (
          <div>Loading Album...</div>
        )}
      </div>
    </>
  );
}

export default App;
