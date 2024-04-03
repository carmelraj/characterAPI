import "./CardThree.scss";
// import { useState } from "react";
import { Image, Figure, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BreadCrum from "../../Breadcrum/Breadcrumn";
const CardThree = ({ data }) => {
  // const [id, setId] = useState(0);
  const navigator = useNavigate();
  const showMoreDate = () => {
    const linkUrl = data?.location?.url;
    const number = linkUrl.substring(linkUrl.lastIndexOf("/") + 1);
    // setId(number);
    navigator(`/location/${number}`);
  };

  return (
    <div className="CardThree">
      <Container>
        <BreadCrum />
        <div className="innerContent">
          <Figure>
            <Image src={data?.image} alt={data?.name} />
          </Figure>
          <div className="content">
            <Link to={`/subcharacter/${data?.id}`}>
              <h2>{data?.name}</h2>
            </Link>
            <p className="status">
              <span
                className={
                  data?.status == "Alive"
                    ? "green"
                    : data?.status == "Dead"
                    ? "red"
                    : "unknown"
                }
              ></span>
              {data?.status} {data?.species}
            </p>
            <h5>Last known location</h5>
            {/* to={data?.location?.url} */}
            <div onClick={showMoreDate}>{data?.location?.name}</div>
            <h5>Firts seen in </h5>
            <Link to={data?.origin?.url} target="_blank">
              {data?.origin?.name}
            </Link>
            <h5 style={{ paddingTop: "15px" }}>List of episode </h5>
            {data?.episode.map((data, index) => {
              return <p key={index}>{data}</p>;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CardThree;
