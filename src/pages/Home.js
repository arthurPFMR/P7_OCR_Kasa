import React from "react";
import data from "../assets/database/db.json"
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import GetallRentals from "../components/GetAllRentals";

const Home = () => {
  return (
    <div className="DOM">
      <Banner />
      <article>
        <GetallRentals data={data} />
      </article>
    </div>
  );
};

export default Home;
