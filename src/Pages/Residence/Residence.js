import React, { useEffect } from "react";
import "./Residence.scss";
import { useParams } from "react-router-dom";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
import CardFour from "../../Components/Card/CardFour/CardFour";
const Residence = () => {
  const { data, fetchData } = UseAxios();
  const { id } = useParams();

  console.log(">>>", data);
  // fetch a character
  const fetchSpecificCharacter = () => {
    fetchData({
      url: `/api/location/${id}`,
      method: "GET",
    });
  };

  useEffect(() => {
    fetchSpecificCharacter();
  }, []);
  return (
    <div className="Residence" data-testid="Residence">
      <CardFour data={data} />
    </div>
  );
};

Residence.propTypes = {};

Residence.defaultProps = {};

export default Residence;
