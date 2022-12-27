import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../assets/database/db.json"
import Slider from "../components/Slider";
import Footer from "../components/Footer";


const Rental = () => {
  const { id } = useParams();

  const rental = data.find((data) => data.rentalId === id);

  return ! rental ? (
    <Navigate to="/about" />
  ) : (
    <>
    <main>
      <Slider pictures={rental.pictures} title={rental.title} />
    </main>
    <Footer />
    </>
  );
};

export default Rental;
