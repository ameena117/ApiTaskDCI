import { useEffect, useState } from "react";

const useAlbum = () => {
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
        const matchData = albums.filter(album => album.id.toString().includes(e));
        e? setAlbums(matchData): fetchData();
    };

  return {
    albums,
    fetchData,
    fillterData
  };
};

export { useAlbum };

