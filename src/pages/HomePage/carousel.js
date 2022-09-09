import React from "react";
import "antd/dist/antd.css";
import { Carousel, Tooltip } from "antd";
import "./carousel.css";
import productList from "../../utils/products.json";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import {
  ShoppingCartOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

const CarouselComponent = () => {
  const { handleShoppingCart } = React.useContext(ShoppingCartContext);
  return (
    <Carousel>
      <Carousel
        autoplay
        arrows
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
      >
        <div>
          <div
            style={{
              backgroundColor: "#AAA",
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "1vh",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {productList[0].name}
            </span>
            <img
              src="https://picsum.photos/2000/300?random=1"
              style={{
                objectFit: "fill",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Tooltip title="Adicionar ao carrinho" placement="left">
              <ShoppingCartOutlined
                alt="Add to cart"
                onClick={() => handleShoppingCart(productList[0].id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "5rem",
                  zIndex: 99,
                }}
              />
            </Tooltip>
          </div>
          <div style={{ height: "20w", backgroundColor: "#AAA" }}></div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#AAA",
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
              {productList[1].name}
            </h2>
            <img
              src="https://picsum.photos/2000/300?random=2"
              style={{
                objectFit: "fill",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Tooltip title="Adicionar ao carrinho" placement="left">
              <ShoppingCartOutlined
                onClick={() => handleShoppingCart(productList[1].id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "5rem",
                }}
              />
            </Tooltip>
          </div>
          <div style={{ height: "20w", backgroundColor: "#AAA" }}></div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "#AAA",
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
              {productList[2].name}
            </h2>
            <img
              src="https://picsum.photos/2000/300?random=3"
              style={{
                objectFit: "fill",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Tooltip title="Adicionar ao carrinho" placement="left">
              <ShoppingCartOutlined
                onClick={() => handleShoppingCart(productList[2].id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "5rem",
                }}
              />
            </Tooltip>
          </div>
          <div style={{ height: "20w", backgroundColor: "#AAA" }}></div>
        </div>
        <div>
          <div>
            <div
              style={{
                backgroundColor: "#AAA",
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
                {productList[3].name}
              </h2>
              <img
                src="https://picsum.photos/2000/300?random=4"
                style={{
                  objectFit: "fill",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
              <Tooltip title="Adicionar ao carrinho" placement="left">
                <ShoppingCartOutlined
                  onClick={() => handleShoppingCart(productList[3].id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "5rem",
                  }}
                />
              </Tooltip>
            </div>
            <div style={{ height: "20w", backgroundColor: "#AAA" }}></div>
          </div>
        </div>
      </Carousel>
    </Carousel>
  );
};
export default CarouselComponent;
