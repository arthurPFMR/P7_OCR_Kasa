import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GetallRentals from "../components/GetAllRentals";

const Home = () => {
  return (
    <div className="DOM">
      <Banner />
      <article>
        <GetallRentals />
      </article>
      <Footer />
    </div>
  );
};

export default Home;
