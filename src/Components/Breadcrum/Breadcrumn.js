import "./BreadCrum.scss";
import {
  Breadcrumb,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
const BreadCrum = () => {
  // const location = useLocation();
  // const pathnames = location.pathname.split("/").filter((x) => x);
  // let breadcrumbPath = "";
  // console.log("Breadcrum", location);
  return (
    <div className="BreadCrum">
      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="d-flex align-items-center"
        >
          {/* <Breadcrumb.Item key={breadcrumbPath}> sdsd</Breadcrumb.Item> */}
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to={"/"}>Home</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </div>
  );
};
export default BreadCrum;
