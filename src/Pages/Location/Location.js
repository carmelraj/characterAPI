import React, { useEffect } from "react";
import "./Location.scss";
import { useParams } from "react-router-dom";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
// import CardTwo from "../../Components/Card/CardTwo/CardTwo";
import CardThree from "../../Components/Card/CardThree/CardThree";
const Location = () => {
  const { data, fetchData } = UseAxios();
  const { id } = useParams();

  // fetch a character
  const fetchSpecificCharacter = () => {
    fetchData({
      url: `/api/character/${id}`,
      method: "GET",
    });
  };

  useEffect(() => {
    fetchSpecificCharacter();
  }, []);
  // console.log("location", data);
  return (
    <div className="Location" data-testid="Location">
      <CardThree data={data} />
    </div>
  );
};
export default Location;
