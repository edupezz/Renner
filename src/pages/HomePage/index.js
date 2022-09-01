import React from "react";
import { HomePageContainer, CarouselContainer } from "./styles";
import CarouselComponent from "./carousel";
import { Divider } from "antd";

const HomePage = () => {
  return (
    <HomePageContainer>
      <CarouselContainer>
        <CarouselComponent />
      </CarouselContainer>
      <Divider />
    </HomePageContainer>
  );
};

export default HomePage;
