import { useAlbum } from "./useAlbum";

const Album = () => {
  const { matchAlbums, fillterData } = useAlbum();
  return (
    <>
      <div className="inputFilter">
        <input
          type="text"
          onChange={(e) => fillterData(e.target.value)}
          placeholder="Search for albums"
        />
      </div>
      <div className="albums">
        {matchAlbums.length > 0 ? (
          matchAlbums.map((album, i) => {
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
};

export { Album };