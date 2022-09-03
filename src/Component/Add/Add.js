import React, { useEffect, useState } from "react";
import "./Add.css";

function Add() {
  const initialData = {
    name: "",
    price: "",
    category: "",
    star: "",
    description: "",
    image: "",
  };
  const [data, setData] = useState(initialData);

  const inputData = (e) => {
    const { value, name } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const SubmitData = (e) => {
    e.preventDefault();
    console.log(data, typeof data);
    const save = JSON.parse(localStorage.getItem("product") || "[]");
    data.id = Date.now();
    console.log(data + " hello data");
    save.push(data);

    localStorage.setItem("product", JSON.stringify(save));
    setData({
      name: "",
      price: "",
      category: "",
      star: "",
      description: "",
      image: "",
    });
  };

  return (
    <div class="containery">
      <h1>Product Dashboard</h1>
      <p>
        We would love to give the personel client Product Dashboard,
        <br></br>free to get in touch with us.
      </p>
      <div class=".contact-box">
        <div class="contact-left"></div>
        <h3> Add Product</h3>
        <form>
          <div className="subjectx">
            <div class="input-row">
              <div class="input-group">
                <label>Product Name</label>
                <input
                  value={data.name}
                  name="name"
                  onChange={inputData}
                  type="text"
                ></input>
              </div>
            </div>
            <div>
              <div className="more_info">
                <div class="input-row">
                  <div class="input-group">
                    <div className="add">
                      <label>Product Price</label>
                    </div>
                    <input
                      value={data.price}
                      name="price"
                      onChange={inputData}
                      type="text"
                    ></input>
                  </div>
                </div>
                <div class="input-row">
                  <div class="input-group">
                    <div className="add">
                      <label>Product Category</label>
                    </div>
                  </div>
                </div>
                <div>
                  <select
                    className="select"
                    value={data.category}
                    name="category"
                    onChange={inputData}
                  >
                    <option>Toys</option>
                    <option>Cloths</option>
                    <option>Gaming</option>
                    <option>Electronic</option>
                    <option>Face & hair</option>
                  </select>
                  <input value={data.category} type="text"></input>
                </div>
                <div class="input-row">
                  <div class="input-group">
                    <div className="add">
                      <label>Star Rating</label>
                    </div>
                  </div>
                </div>
                <div>
                  <select
                    className="select"
                    value={data.star}
                    name="star"
                    onChange={inputData}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <input value={data.star} type="text"></input>
                </div>
              </div>
              <div className="add_more">
                <label>Product Description</label>
              </div>

              <textarea
                value={data.description}
                name="description"
                onChange={inputData}
                rows="5"
              ></textarea>
            </div>
          </div>
          <div class="input-row">
            <div class="input-group">
              <div className="add">
                <label>Product Image</label>
              </div>
              <input
                className="image"
                placeholder="image src"
                value={data.image}
                name="image"
                onChange={inputData}
                type="text"
              ></input>
            </div>
          </div>
          <button onClick={SubmitData} className="button" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
