import React from "react";
import { Dropdown, Image } from "react-bootstrap";
import DeleteCart from "./DeleteCart";
import { useSelector } from "react-redux";
import { RootState } from "../utility/store";
import image1 from "../images/image-product-1-thumbnail.jpg";

function CartItems() {
  const quantity = useSelector((state: RootState) => state.counter.value);
  return (
    <Dropdown.ItemText>
      <Dropdown.ItemText className="cart-item">
        <Image style={{ width: "4rem", height: "4rem" }} src={image1} />
        <div>
          <p style={{ margin: "0" }}>Fall Limited Edition Sneakers</p>
          $125.00 x {quantity}{" "}
          <span style={{ fontWeight: "bold" }}>{`$${quantity * 125}.00`}</span>
        </div>
        <DeleteCart />
      </Dropdown.ItemText>
      <Dropdown.ItemText
        style={{
          padding: "0",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{ width: "100%", marginTop: "1rem" }}
          className="add-to-cart"
        >
          Check out
        </button>
      </Dropdown.ItemText>
    </Dropdown.ItemText>
  );
}

export default CartItems;
