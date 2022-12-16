import { useState, useEffect } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import axios from "axios";
import SearchFilter from "react-filter-search";

import ProductCard from "../../components/productCard";
import { useThemeHook } from "../../contexts/ThemeContext";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  const [theme] = useThemeHook();

  function getResponse() {
    axios
      .get("./Food.json")
      .then((res) => setProductData(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getResponse();
  }, []);

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col xs={10} md={7} lg={6} xl={4} className="mb-3 mx-auto text-center">
          <h1
            className={`${
              theme ? "text-dark-primary" : "text-black"
            }  mt-5 mb-3`}
          >
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
        {searchInput.length > 2 ? (
          <SearchFilter
            value={searchInput}
            data={productData}
            renderResults={(results) => (
              <Row className="justify-content-center">
                {results.map((item) => (
                  <ProductCard data={item} key={item.id} />
                ))}
              </Row>
            )}
          />
        ) : (
          <Row className="justify-content-center">
            {productData.map((item) => {
              return <ProductCard data={item} key={item.id} />;
            })}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Home;
