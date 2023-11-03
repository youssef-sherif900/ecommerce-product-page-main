import React from "react";
interface style {
  src: string;
  AR: string;
  imgWidth: string;
  borderRadius: string;
}

function Image({ src, AR, imgWidth, borderRadius }: style) {
  let style = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    aspectRatio: AR,
    width: imgWidth,
    borderRadius: borderRadius,
  };
  return <div style={style}></div>;
}

export default Image;
