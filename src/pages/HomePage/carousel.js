import React from "react";
import "antd/dist/antd.css";
import { Carousel, Tooltip } from "antd";
import productList from "../../utils/products.json";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import { ShoppingCartOutlined } from "@ant-design/icons";

const CarouselComponent = () => {
  const { handleShoppingCart } = React.useContext(ShoppingCartContext);
  return (
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
            <Tooltip title="Adicionar ao carrinho" placement="left">
              <ShoppingCartOutlined
                alt="Add to cart"
                onClick={() => handleShoppingCart(productList[0].id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "5rem",
                }}
              />
            </Tooltip>
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
              {productList[1].name}
            </h2>
            <img
              src={productList[1].imgUrl}
              style={{ objectFit: "fill", marginTop: "10px" }}
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
              {productList[2].name}
            </h2>
            <img
              src={productList[2].imgUrl}
              style={{ objectFit: "fill", marginTop: "10px" }}
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
          <div style={{ height: "20w", backgroundColor: "green" }}></div>
        </div>
        <div>
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
                {productList[3].name}
              </h2>
              <img
                src={productList[3].imgUrl}
                style={{ objectFit: "fill", marginTop: "10px" }}
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
            <div style={{ height: "20w", backgroundColor: "green" }}></div>
          </div>
        </div>
      </Carousel>
    </Carousel>
  );
};
export default CarouselComponent;
