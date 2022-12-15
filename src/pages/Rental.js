import React from "react";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import RentalById from "../components/RentalById";

const Rental = () => {
  return (
    <div className="DOM">
      <header>
        <nav>
          <Navigation />
        </nav>
        <Banner />
      </header>
      <article>
        <RentalById />
      </article>
    </div>
  );
};

export default Rental;
