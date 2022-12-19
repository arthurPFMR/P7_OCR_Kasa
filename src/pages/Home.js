import React from "react";
import Banner from "../components/Banner";
import Rentals from "../components/RentalsOfHome";

const Home = () => {
  return (
    <div className="DOM">
      <Banner />
      <article>
        <Rentals />
      </article>
    </div>
  );
};

export default Home;
