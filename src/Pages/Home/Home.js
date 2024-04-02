import React, { useEffect } from "react";
import "./Home.scss";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
import CardOne from "../../Components/Card/CardOne/CardOne";
import { Container, Row, Col } from "react-bootstrap";
const Home = () => {
  const { data, loading, error, fetchData } = UseAxios();
  // fetch a character
  const fetchPost = () => {
    fetchData({
      url: "/api/character",
      method: "GET",
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  console.log(data);
  return (
    <div className="Home" data-testid="Home">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={6} lg={6}>
            <CardOne />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6}>
            fdfd
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
