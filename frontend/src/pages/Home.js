import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import HorizontalCardProduct from "../components/HorizontalCardProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct category={"books"} heading={"Best Seller Books"} />
      <HorizontalCardProduct category={"ethnic"} heading={"Women's Ethnic"} />
      <VerticalCardProduct category={"gym"} heading={"Gym Equipments"} />
      <VerticalCardProduct category={"watches"} heading={"Watches"} />
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
      <VerticalCardProduct category={"televisions"} heading={"Televisions"} />
      <VerticalCardProduct category={"laptop"} heading={"Laptop & Tablet"} />
      <VerticalCardProduct category={"games"} heading={"Video Games"} />
      <VerticalCardProduct category={"toys"} heading={"Kid's Toys"} />
    </div>
  );
};

export default Home;
