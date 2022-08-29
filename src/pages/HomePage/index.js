import React from "react";
import { HomePageContainer, CarouselContainer } from "./styles";
import CarouselComponent from "./carousel";

const HomePage = () => {
  return (
    <HomePageContainer>
      <CarouselContainer>
        <CarouselComponent />
      </CarouselContainer>
    </HomePageContainer>
  );
};

export default HomePage;
