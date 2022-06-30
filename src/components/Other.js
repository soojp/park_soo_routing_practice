import React from "react";
import { useParams } from "react-router-dom";

const Other = (props) => {
  const { any, color, bgColor } = useParams();
  return (
    <div>
      {isNaN(any) ? (
        <p style={color ? { color: color, backgroundColor: bgColor } : null}>
          The word is: {any}
        </p>
      ) : (
        <p>The number is: {any}</p>
      )}
    </div>
  );
};

export default Other;
