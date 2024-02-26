import { useInfo } from "./useInfo";

const Info = () => {
//   const { albums, fillterData } = useAlbum();
  return (
    <>
      <input type="date" onChange={(e) => console.log(Date().getFullYear())}/>
    </>
  );
};

export { Info };
