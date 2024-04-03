import React, { useEffect } from "react";
import "./Residence.scss";
import { useParams } from "react-router-dom";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
import CardFour from "../../Components/Card/CardFour/CardFour";
const Residence = () => {
  const { data, fetchData } = UseAxios();
  const { id } = useParams();

  useEffect(() => {
    // fetch a character
    const fetchSpecificCharacter = () => {
      fetchData({
        url: `/api/location/${id}`,
        method: "GET",
      });
    };
    fetchSpecificCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
