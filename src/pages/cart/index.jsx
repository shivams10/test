import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCartX } from "react-icons/bs";

import { useThemeHook } from "../../contexts/ThemeContext";
const Cart = () => {
  const [theme] = useThemeHook();
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container className="py-4 mt-5">
      <h1
        className={`${
          theme ? "text-dark-primary" : "text-black"
        } my-3 text-center`}
      >
        {isEmpty ? "Your Cart is Empty" : "Your Cart"}
      </h1>
      <Row className="justify-content-center">
        <Table
          responsive="sm"
          striped
          bordered
          hover
          variant={theme ? "dark" : "light"}
          className="mb-5"
        >
          <tbody>
            {items.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ padding: ".5rem" }}>
                        <img
                          src={item.image}
                          style={{ width: "4rem" }}
                          alt={item.name}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                        textOverFlow: "ellipsis",
                      }}
                    >
                      {item.name}
                    </h6>
                  </td>
                  <td>₹ {item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="ms-2"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="ms-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                      className="ms-2"
                    >
                      Remove Item
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && 
          <Row
            style={{ position: "fixed", bottom: 0 }}
            className={`${
              theme ? "theme-black-2 text-white" : "bg-light text-balck"
            } justify-content-center w-100`}
          >
            <Col className="py-4">
              <h4>Total Price: Rs. <span>{cartTotal}</span></h4>
            </Col>
            <Col className="px-0 py-2" md={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </Button>
              <Button variant="success" className="m-2">
                <BsCartCheck size="1.7rem" />
                Order Now
              </Button>
            </Col>
          </Row>
        }
      </Row>
    </Container>
  );
};

export default Cart;