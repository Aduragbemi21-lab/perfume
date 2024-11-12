import React from "react";
import { perfumes } from "../data";
import SinglePerfume from "./SinglePerfume";
import Homepage from "../Pages/Homepage";

const Allperfume = () => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {perfumes.map((perfume) => {
        return <SinglePerfume key={perfume.id} {...perfume} />;
      })}
    </div>
  );
};

export default Allperfume;
