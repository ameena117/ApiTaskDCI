import { useEffect, useState } from "react";

const useAlbum = () => {
  const [albums, setAlbums] = useState([]);
  let [matchAlbums, setMatchAlbums] = useState([]);
  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
    const data = await response.json();
    setAlbums(data);
    setMatchAlbums(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fillterData = async (e) => {
    e ? setMatchAlbums(albums.filter(album =>
      album.id.toString().includes(e) ||
      album.title.toString().includes(e)
    )) : setMatchAlbums(albums);
  };


  return {
    matchAlbums,
    fetchData,
    fillterData,
  };
};

export { useAlbum };