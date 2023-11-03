import React from "react";
interface style {
  src: string;
}
function Avatar({ src }: style) {
  return (
    <div
      className="icon"
      style={{
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Avatar;
