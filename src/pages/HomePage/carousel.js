import React from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import productList from "../../utils/products.json";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CarouselComponent = () => (
  <Carousel>
    <Carousel autoplay>
      <div>
        <div
          style={{
            backgroundColor: "green",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1vh",
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productList[0].name}
          </h2>
          <img
            src={productList[0].imgUrl}
            style={{ objectFit: "fill", marginTop: "10px" }}
          />
          <ShoppingCartOutlined
            style={{ display: "flex", alignItems: "center", fontSize: "5rem" }}
          />
        </div>
        <div style={{ height: "20w", backgroundColor: "green" }}></div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "green",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "1vh",
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productList[0].name}
          </h2>
          <img
            src={productList[0].imgUrl}
            style={{ objectFit: "fill", marginTop: "10px" }}
          />
          <ShoppingCartOutlined
            style={{ display: "flex", alignItems: "center", fontSize: "5rem" }}
          />
        </div>
        <div style={{ height: "20w", backgroundColor: "green" }}></div>
      </div>
      <div>
        <div style={{ backgroundColor: "orange" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1vh",
            }}
          >
            {productList[2].name}
          </h2>
          <img src={productList[2].imgUrl} />
        </div>
      </div>
      <div>
        <div style={{ backgroundColor: "orange" }}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1vh",
            }}
          >
            {productList[3].name}
          </h2>
          <img src={productList[3].imgUrl} />
        </div>
      </div>
    </Carousel>
  </Carousel>
);

export default CarouselComponent;
