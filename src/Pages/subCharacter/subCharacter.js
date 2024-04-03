import React, { useEffect } from "react";
import "./subCharacter.scss";
import { useParams } from "react-router-dom";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
// import CardOne from "../../Components/Card/CardOne/CardOne";
import CardTwo from "../../Components/Card/CardTwo/CardTwo";
import UseLoader from "../../Components/Loader/Loader";
import { Container } from "react-bootstrap";
import BreadCrum from "../../Components/Breadcrum/Breadcrumn";
const SubCharacter = () => {
  const { data, loading, fetchData } = UseAxios();
  const { id } = useParams();

  useEffect(() => {
    // fetch a character
    const fetchSpecificCharacter = () => {
      fetchData({
        url: `/api/character/${id}`,
        method: "GET",
      });
    };
    fetchSpecificCharacter();
  }, [fetchData, id]);

  return (
    <div className="subCharacter" data-testid="SubCharacter">
      <Container>
        {loading && <UseLoader />}
        <BreadCrum />
        <CardTwo data={data} />
      </Container>
    </div>
  );
};
export default SubCharacter;
