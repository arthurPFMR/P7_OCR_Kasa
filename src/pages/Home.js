import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import Rentals from "../components/Rentals";

const Home = () => {
  return (
    <div className="DOM">
      <header>
        <nav>
          <Navigation />
        </nav>
        <Banner />
      </header>
      <article>
        <Rentals />
      </article>
    </div>
  );
};

export default Home;
