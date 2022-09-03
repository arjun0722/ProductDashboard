import React, { useState } from "react";
import "./List.css";
import {
  CCardTitle,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CListGroup,
  CListGroupItem,
  CTooltip,
} from "@coreui/react";
import { CButton } from "@coreui/react";
import { useDispatch } from "react-redux";

import { add, remove } from "../../Store/cartSlice";
function List() {
  const dispatch = useDispatch();
  const [proData, setproData] = useState(
    JSON.parse(localStorage.getItem("product") || "[]")
  );
  const [search, setSearch] = useState("");
  const onMaxPrice = () => {
    const datasort = proData.slice();
    datasort.sort((a, b) => b.price - a.price);
    setproData(datasort);
  };
  const onLowPrice = () => {
    const datasort = proData.slice();
    datasort.sort((a, b) => a.price - b.price);
    setproData(datasort);
  };
  const onMaxStar = () => {
    const datasort = proData.slice();
    datasort.sort((a, b) => b.star - a.star);
    setproData(datasort);
  };
  const onLowStar = () => {
    const datasort = proData.slice();
    datasort.sort((a, b) => a.star - b.star);
    setproData(datasort);
  };

  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleAdd = (items) => {
    dispatch(add(items));
  };
  const handleDelete = (id) => {
    console.log(id + "nahi hoga");
    dispatch(remove(id));
    setproData(JSON.parse(localStorage.getItem("product") || "[]"));
  };

  if (proData) {
    return (
      <div className="main_card">
        <h1>List of Products</h1>
        <input
          value={search}
          onChange={onSearch}
          type="text"
          placeholder="search here by name"
        ></input>
        <div>
          <button className="sortbtn" onClick={onMaxPrice}>
            Price ↑
          </button>
          <button className="sortbtn" onClick={onLowPrice}>
            Price ↓
          </button>
          <button className="sortbtn" onClick={onMaxStar}>
            Star ↑
          </button>
          <button className="sortbtn" onClick={onLowStar}>
            Price ↓
          </button>
        </div>
        <div className="dflex">
          {proData
            .filter((items) => {
              if (search === "") {
                return items;
              } else if (items.name.includes(search.toLowerCase())) {
                return items;
              }
            })
            .map((items, index) => {
              return (
                <div className="card" key={index}>
                  <CCard style={{ width: "18rem" }}>
                    <CCardImage orientation="top" src={items.image} />
                    <CCardBody>
                      <CCardTitle>{`Name : ${items.name}`}</CCardTitle>
                      <CCardText>{`Description : ${items.description}`}</CCardText>
                    </CCardBody>
                    <CListGroup flush>
                      <CListGroupItem>{`Price : ${items.price}$`}</CListGroupItem>
                      <CListGroupItem>{`Stars : ${items.star}`}</CListGroupItem>
                      <CListGroupItem>
                        {`Category : ${items.category}`}{" "}
                      </CListGroupItem>
                    </CListGroup>
                    <CCardBody>
                      <CTooltip
                        content="Delete the product from the list"
                        placement="bottom"
                      >
                        <CButton
                          onClick={() => handleDelete(items.id)}
                          className="card_btn"
                          size="sm"
                          color="danger"
                          variant="outline"
                        >
                          Delete
                        </CButton>
                      </CTooltip>
                      <CTooltip
                        content="Add the product into Cart"
                        placement="bottom"
                      >
                        <CButton
                          onClick={() => handleAdd(items)}
                          className="card_btn"
                          size="sm"
                          color="info"
                          variant="outline"
                        >
                          Add
                        </CButton>
                      </CTooltip>
                    </CCardBody>
                  </CCard>
                </div>
              );
            })}
        </div>
      </div>
    );
  } else if (proData === "") {
    return console.log("no items in your list patron ");
  }
}

export default List;
