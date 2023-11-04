import React, { useState } from "react";
import image1 from "../images/image-product-1-thumbnail.jpg";
import image2 from "../images/image-product-2-thumbnail.jpg";
import image3 from "../images/image-product-3-thumbnail.jpg";
import image4 from "../images/image-product-4-thumbnail.jpg";
import mainImage1 from "../images/image-product-1.jpg";
import mainImage2 from "../images/image-product-2.jpg";
import mainImage3 from "../images/image-product-3.jpg";
import mainImage4 from "../images/image-product-4.jpg";
import Image from "./Image";

let images = [
  [image1, mainImage1],
  [image2, mainImage2],
  [image3, mainImage3],
  [image4, mainImage4],
];

interface Open {
  open: ()=>void
}
function ProductImages({open}:Open) {
  const [productImage, setProductImage] = useState(mainImage1);
  const [selected, setSelected] = useState(0);

  return (
    <div className="product-images">
      <Image
        src={productImage}
        AR={"1/1"}
        imgWidth={"25vw"}
        borderRadius={"1.5rem"}
        click={open}
      />
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
              src={image[0]}
              AR={"1/1"}
              imgWidth={"5vw"}
              borderRadius={"1rem"}
              val={image[1]}
              click={(e) => {
                setProductImage(e.target.getAttribute("data-value"));
                setSelected(ind)
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
