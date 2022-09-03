import React from "react";
import {
  CCardTitle,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CListGroup,
  CListGroupItem,
  CButton,
} from "@coreui/react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, addtowishlist } from "../../Store/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.cart);
  const handleDelete = (id) => {
    console.log(id);
    dispatch(removefromcart(id));
  };
  const handleWhislist = (products) => {
    dispatch(addtowishlist(products));
  };
  return (
    <div className="main_card">
      <h1>Cart Items</h1>
      <div className="dflex">
        {Products.map((products) => {
          return (
            <div>
              <CCard key={products.id} style={{ width: "18rem" }}>
                <CCardImage orientation="top" src={products.image} />
                <CCardBody>
                  <CCardTitle>{`Name : ${products.name}`}</CCardTitle>
                  <CCardText>
                    {`Description : ${products.description}`}
                  </CCardText>
                </CCardBody>
                <CListGroup flush>
                  <CListGroupItem>{`Price : ${products.price}`}</CListGroupItem>
                  <CListGroupItem>{`Stars : ${products.star}`}</CListGroupItem>
                  <CListGroupItem>{`Category : ${products.category}`}</CListGroupItem>
                </CListGroup>
                <CCardBody>
                  <CButton
                    onClick={() => handleDelete(products.id)}
                    className="card_btn"
                    size="sm"
                    color="primary"
                    variant="outline"
                  >
                    Delete
                  </CButton>
                </CCardBody>
              </CCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
