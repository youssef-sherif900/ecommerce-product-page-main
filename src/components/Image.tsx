import React from "react";
interface style {
  src: string;
  AR: string;
  imgWidth: string;
  borderRadius: string;
  click?: (e: any) => void;
  val?: string;
  active?: boolean;
}

function Image({ src, AR, imgWidth, borderRadius, click, val, active }: style) {
  let style = {
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    aspectRatio: AR,
    width: imgWidth,
    borderRadius: borderRadius,
  };
  return (
    <div
      style={
        active
          ? {
              border: "2px solid  hsl(26, 100%, 55%)",
              borderRadius: borderRadius,
            }
          : { border: "2px solid transparent", borderRadius: borderRadius }
      }
    >
      <div
        className="smallImages"
        data-value={val}
        style={!active ? style : { ...style, filter: "opacity(0.5)" }}
        onClick={click}
      ></div>
    </div>
  );
}

export default Image;
