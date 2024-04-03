import "./CardOne.scss";
// import { useState } from "react";
import { Image, Figure } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

// const itemVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible,
// };
const CardOne = ({ data }) => {
  // const [id, setId] = useState(0);
  const navigator = useNavigate();

  // show the location of the character
  const showMoreDate = () => {
    const linkUrl = data?.location?.url;
    const number = linkUrl.substring(linkUrl.lastIndexOf("/") + 1);
    // setId(number);
    navigator(`/location/${number}`);
  };

  // show the residence of the character
  const showResedence = () => {
    const linkUrl = data?.origin?.url;
    const number = linkUrl.substring(linkUrl.lastIndexOf("/") + 1);
    // setId(number);
    navigator(`/resedence/${number}`);
    console.log(data?.origin?.url);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      className="CardOne"
    >
      <Figure>
        <Image src={data.image} alt={data.name} />
      </Figure>
      <div className="content">
        <Link to={`/subcharacter/${data.id}`} target="_blank">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible,
            }}
          >
            {data.name}
          </motion.h2>
        </Link>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          className="status"
        >
          <span
            className={
              data.status === "Alive"
                ? "green"
                : data.status === "Dead"
                ? "red"
                : "unknown"
            }
          ></span>
          {data.status} {data.species}
        </motion.p>
        <motion.h5
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
          Last known location
        </motion.h5>
        {/* <Link to={data.location.url} target="_blank"></Link> */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          onClick={showMoreDate}
          className="pointer"
        >
          {data.location.name}
        </motion.div>
        <motion.h5
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
        >
          Firts seen in{" "}
        </motion.h5>
        {/* <Link to={data.origin.url} target="_blank"></Link> */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible,
          }}
          onClick={showResedence}
          className="pointer"
        >
          {data.origin.name}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default CardOne;
