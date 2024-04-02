import "./CardFour.scss";
import { useEffect, useState } from "react";
import { Row, Col, Image, Figure, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import BreadCrum from "../../Breadcrum/Breadcrumn";
const CardFour = ({ data }) => {
  console.log("card4", data);
  const [id, setId] = useState(0);
  const navigator = useNavigate();
  const location = useLocation();

  const showMoreDate = () => {
    const linkUrl = data?.location?.url;
    const number = linkUrl.substring(linkUrl.lastIndexOf("/") + 1);
    setId(number);
    navigator(`/location/${number}`);
  };

  return (
    <div className="CardFour">
      <Container>
        <BreadCrum />
        <div className="content">
          <h2>{data?.name}</h2>
          <h3>{data?.dimension}</h3>
          <h5 style={{ paddingTop: "15px" }}>List of residents </h5>
          {data?.residents.map((data, index) => {
            return <p key={index}>{data}</p>;
          })}
        </div>
      </Container>
    </div>
  );
};
export default CardFour;
