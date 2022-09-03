import React from "react";
import "./View.css";

import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import { useSelector } from "react-redux";
function View() {
  const views = useSelector((state) => state.cart);

  return (
    <div className="containerz">
      <h1>Inbox</h1>
      {views.map((prods) => {
        return (
          <div className="card">
            <CAccordion alwaysOpen activeItemKey={2}>
              <CAccordionItem itemKey={1}>
                <CAccordionHeader>{prods.name}</CAccordionHeader>
                <CAccordionBody>
                  Hey , Client You have add [<strong> {prods.name} </strong>] in
                  your cart. We will let you know when the product is in
                  discount . The specification of the product is below:-
                  <br />
                  Description - {prods.description}
                  <br />
                  Price - {prods.price}
                  <br />
                  Star rating - {prods.star}
                  <br />
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
          </div>
        );
      })}
    </div>
  );
}

export default View;
