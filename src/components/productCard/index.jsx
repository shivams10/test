import { Button, Card } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";

import { useThemeHook } from "../../contexts/ThemeContext";
import "./index.css";

const ProductCard = (props) => {
    let { image, price, name } = props.data;
    const [theme] = useThemeHook();
    const {addItem} = useCart();
  
    const addToCart = () => {
      addItem(props.data);
    };
  
    return (
      <Card
        className={`${
          theme ? "theme-black-2" : "theme-light"
        } text-center p-0 overflow-hidden shadow mx-auto mb-4 card-container`}
      >
        <div className="card-image">
          <div className="card-image-width">
            <Card.Img variant="top" className="img-fluid" src={image} />
          </div>
        </div>
        <Card.Body className={`${theme ? "text-white" : ""}`}>
          <Card.Title className="card-heading">{name}</Card.Title>
          <Card.Title>
            ₹ <span className="h3 text-light-primary">{price}</span>
          </Card.Title>
          <Button className={`${theme?"button-dark ":""} cart-button`} onClick={() => addToCart()}>
            Add To Cart <BsCartPlus />
          </Button>
        </Card.Body>
      </Card>
    );
  };
  
  export default ProductCard;  