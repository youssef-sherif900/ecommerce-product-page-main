import { useState } from "react";
import mainImage1 from "../images/image-product-1.jpg";
import mainImage2 from "../images/image-product-2.jpg";
import mainImage3 from "../images/image-product-3.jpg";
import mainImage4 from "../images/image-product-4.jpg";
import MainImage from "./MainImage";

let mainImage = [mainImage1, mainImage2, mainImage3, mainImage4];

function MobileCarousel() {
  const [productImage, setProductImage] = useState(mainImage1);

  let handleNext = () => {
    setProductImage((prev) => {
      if (mainImage.indexOf(prev) === mainImage.length - 1) {
        return mainImage[0];
      }
      return mainImage[mainImage.indexOf(prev) + 1];
    });
  };

  let handlePrev = () => {
    setProductImage((prev) => {
      if (mainImage.indexOf(prev) === 0) {
        return mainImage[mainImage.length - 1];
      }
      return mainImage[mainImage.indexOf(prev) - 1];
    });
  };

  return (
    <div className="mobile-carousel">
      <button onClick={handlePrev} className="carousel-button carousel-prev">
        <svg className="prev-next-svg" width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
      <MainImage
        src={productImage}
        AR={"1/0.7"}
        imgWidth={"100%"}
        borderRadius={"0"}
      />
      <button onClick={handleNext} className="carousel-button carousel-next">
        <svg className="prev-next-svg" width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            stroke-width="3"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default MobileCarousel;
