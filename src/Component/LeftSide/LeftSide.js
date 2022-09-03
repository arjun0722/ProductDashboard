import React from "react";
import "./LeftSide.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function LeftSide() {
  const Items = useSelector((state) => state.cart);
  const history = useNavigate();
  const onView = () => {
    history("/view");
  };
  const onAdd = () => {
    history("/");
  };
  const onList = () => {
    history("/list");
  };
  const onCart = () => {
    history("/cart");
  };
  return (
    <div className="containerl">
      <div className="navigation">
        <ul>
          <li>
            <a href="#">
              <span className="title">Arjun</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <AddCircleOutlineIcon />
              </span>
              <span onClick={onAdd} className="title">
                Add
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <FormatListNumberedIcon />
              </span>
              <span onClick={onList} className="title">
                List
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon">
                <ShoppingCartIcon />
              </span>
              <span onClick={onCart} className="title">
                Cart [{Items.length}]
              </span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <RemoveRedEyeIcon />
              </span>
              <span onClick={onView} className="title">
                Inbox
              </span>
            </a>
          </li>
        </ul>
        <div className="toggle"></div>
      </div>
    </div>
  );
}

export default LeftSide;
