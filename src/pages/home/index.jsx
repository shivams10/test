import { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

import { useThemeHook } from "../../contexts/ThemeContext";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [theme] = useThemeHook();

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1 className={`${theme ? "text-dark-primary" : "text-black"} my-5`}>
            Search Foods
          </h1>
          <InputGroup className="mb-3">
            <InputGroup.Text
              className={
                theme
                  ? "text-dark-primary theme-black"
                  : "theme-light text-black"
              }
            >
              <BiSearch size="1.5rem" />
            </InputGroup.Text>
            <FormControl
              className={
                theme ? "text-white theme-black-2" : "theme-light text-black"
              }
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="input food item"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
