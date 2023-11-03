import { useState } from "react";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";
import mainImage1 from "../images/image-product-1.jpg";
import mainImage2 from "../images/image-product-2.jpg";
import mainImage3 from "../images/image-product-3.jpg";
import mainImage4 from "../images/image-product-4.jpg";
import Image from "./Image";
import MainImage from "./MainImage";

interface popUp {
  close: () => void;
  popup: boolean;
}

let images = [image1, image2, image3, image4];
let mainImage = [mainImage1, mainImage2, mainImage3, mainImage4];

function Carousel({ close, popup }: popUp) {
  const [productImage, setProductImage] = useState(mainImage1);
  const [selected, setSelected] = useState(0);

  let handleNext = () => {
    setSelected(mainImage.indexOf(productImage) + 1);
    setProductImage((prev) => {
      if (mainImage.indexOf(prev) === mainImage.length - 1) {
        setSelected(0);
        return mainImage[0];
      }
      return mainImage[mainImage.indexOf(prev) + 1];
    });
  };

  let handlePrev = () => {
    setSelected(mainImage.indexOf(productImage) - 1);
    setProductImage((prev) => {
      if (mainImage.indexOf(prev) === 0) {
        setSelected(mainImage.length - 1);
        return mainImage[mainImage.length - 1];
      }
      return mainImage[mainImage.indexOf(prev) - 1];
    });
  };

  return (
    <div
      className="carousel"
      style={popup! ? { display: "none" } : { display: "flex" }}
    >
      <div style={{ display: "flex", position: "relative" }}>
        <svg
          onClick={close}
          className="close-button"
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className=" close-SVGpath"
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fill-rule="evenodd"
          />
        </svg>

        <button onClick={handlePrev} className="carousel-button carousel-prev">
          <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
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
          AR={"1/1"}
          imgWidth={"40rem"}
          borderRadius={"1.5rem"}
        />
        <button onClick={handleNext} className="carousel-button carousel-next">
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
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
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
          marginTop: "2rem",
        }}
      >
        {images.map((image, ind) => {
          return (
            <Image
              active={selected === ind}
              key={ind}
              src={image}
              AR={"1/1"}
              imgWidth={"5rem"}
              borderRadius={"1rem"}
              val={mainImage[ind]}
              click={(e) => {
                setProductImage(e.target.getAttribute("data-value"));
                setSelected(ind);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
