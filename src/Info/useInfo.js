import { useState } from "react";

const useInfo = () => {
  const [age, setAge] = useState("");
  const calcAge = (birthDate) => {
    const bd = birthDate.split("-");
    const today = new Date();
    const currentDate = today.toLocaleDateString("no-no").split(".").reverse();
    setAge(currentDate[0] - bd[0] + " years");
    // setAge(currentDate[0] - bd[0] + " years " + currentDate[1] - bd[1] + " months" + currentDate[2] - bd[2] + " days");

  };
  const [selectedCountries, setSelectedCountries] = useState([]);
  const countries = [
    { value: "palestine", label: "Palestine" },
    { value: "jordan", label: "Jordan" },
    { value: "syria", label: "Syria" },
    { value: "lebanon", label: "Lebanon" },
  ];
  const onSelectCountry = (data) => {
    setSelectedCountries(data);
  }
  const [name, setName] = useState("");
  const [adress, setAddress] = useState("");
  const onChangeName = (name) => { setName(name) };
  const onChangeAdress = (adress) => { setAddress(adress) };
  const [show, setShow] = useState(false);
  const toggleShow = () => { setShow(!show)};
  return { calcAge, age, countries, onSelectCountry, selectedCountries, name, onChangeName, adress, onChangeAdress, show, toggleShow };
};

export { useInfo };