import React, { useEffect } from "react";
import "./Home.scss";
import UseAxios from "../../Components/Hooks/UseAxios/UseAxios";
import CardOne from "../../Components/Card/CardOne/CardOne";
import { Container, Row, Col } from "react-bootstrap";
import UseLoader from "../../Components/Loader/Loader";
const Home = () => {
  // note: animation are added to some of the pages.

  const { data, loading, error, fetchData } = UseAxios();

  // fetch a character using axios get method
  const fetchCharacter = () => {
    fetchData({
      url: "/api/character",
      method: "GET",
    });
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  return (
    <div className="Home" data-testid="Home">
      <Container>
        <Row>
          {/* useloader is a loader for thos page */}
          {loading && <UseLoader />}
          {/* datas are displayed in sparate component */}
          {data?.results?.map((data, index) => {
            return (
              <Col xs={12} sm={6} md={6} lg={6} key={index}>
                <CardOne data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Home;
