import React from "react";
import "../styles/body.css";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";
import MobileCarousel from "./MobileCarousel";

interface Open {
  openCarosel: () => void;
  isMobile: boolean;
}

function Body({ openCarosel, isMobile }: Open) {
  return (
    <div className="productBody">
      {isMobile ? <MobileCarousel /> : <ProductImages open={openCarosel} />}
      <ProductDescription />
    </div>
  );
}

export default Body;
