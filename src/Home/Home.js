import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
        alt=""
      />
      <div className="home__productContainer1">
        <Products
          id="1"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY436_FMwebp_QL65_.jpg"
        />
        <Products
          id="2"
          title="Comfy Brace Posture Corrector-Back Brace for Men and Women- Fully Adjustable Straightener for Mid, Upper Spine Support- Neck, Shoulder"
          price={19.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51SR37MiEfL.jpg"
        />
        <Products
          id="3"
          title="Fjallraven, Kanken Classic Backpack for Everyday, Graphite"
          price={72.35}
          rating={5}
          image="https://m.media-amazon.com/images/I/71gjJZ4Df2L._AC_SY400_.jpg"
        />
        <Products
          id="4"
          title="Oculus Rift S PC-Powered VR Gaming Headset"
          price={340}
          rating={5}
          image="https://m.media-amazon.com/images/I/71URNvzoWqL._AC_SY400_.jpg"
        />
        <Products
          id="5"
          title="Sony X900H 75-inch TV: 4K Ultra HD Smart LED TV with HDR, Game Mode for Gaming, and Alexa Compatibility - 2020 Model"
          price={3000}
          rating={5}
          image="https://m.media-amazon.com/images/I/612U-Yeox0L._AC_UL640_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
