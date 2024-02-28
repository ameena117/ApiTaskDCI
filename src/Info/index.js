import { useInfo } from "./useInfo";
import Select from "react-select";

const Info = () => {
  const { calcAge, age, countries, onSelectCountry, selectedCountries, name, onChangeName, adress, onChangeAdress, show, toggleShow } = useInfo();
  return (
    <>
    <div className="inputs">
       <div>
        <input type="text" onChange={(e) => { onChangeName(e.target.value) }} placeholder="Name" />
      </div>
      <div>
        <input type="text" onChange={(e) => { onChangeAdress(e.target.value) }} placeholder="Adress" />
      </div>
      <div>
        <input type="date" onChange={(e) => calcAge(e.target.value)} />
        <div>{age}</div>
      </div>

      <div >
        <Select className="select"
          options={countries}
          placeholder="Select Country..."
          onChange={onSelectCountry}
          isMulti
        />
      </div>
    </div>
    <hr/>
     <div className="results">
      <button onClick={() => toggleShow()}>Submit</button>
      {show && <div>
        <div>Name is {name}</div>
        <div>Adress is {adress}</div>
        <div>Your age is {age}</div>
        <div>Selected Countries: {selectedCountries.map((contry, i) => <div> {contry.label} </div>)}</div>
      </div>}
      </div>
    </>
  );
};

export { Info };