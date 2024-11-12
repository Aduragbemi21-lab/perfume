import React from "react";
import Hearder from "../components/Header";
import Allperfume from "../components/Allperfume";
import Cart from "../components/Cart"

const HomePage = () => {
  return (
    <div>
      <Hearder />
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8">
            <Allperfume />
          </div>
          <div className="col-lg-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
