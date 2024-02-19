import { useAlbum } from "./useAlbum";

const Album = () => {
  const { albums, fillterData } = useAlbum();
  return (
    <>
      <div className="inputFilter">
        <input
          type="input"
          onChange={(e) => fillterData(e.target.value)}
          placeholder="Write ID"
        />
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
};

export { Album };
