import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImgComponent({ src }) {
  const [imageLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImgLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded && (
        <Blurhash
          hash="L0MaR]?bfQ?b~qfQfQfQfQfQfQfQ"
          height={302}
          width={410}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      {imageLoaded && <img src={src} alt="" />}
    </>
  );
}

export default ImgComponent;
