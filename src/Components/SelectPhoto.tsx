import React, { useRef } from "react";
import styles from "./SelectPhoto.module.css";
import { InputTypes } from "./types";

function SelectPhoto({ setValue, value }:InputTypes) {
  const inputRef = useRef();
  const resizeBase64Img = (base64, newWidth, newHeight) => {
    return new Promise((resolve) => {
      var canvas = document.createElement("canvas");
      canvas.style.width = newWidth.toString() + "px";
      canvas.style.height = newHeight.toString() + "px";
      let context = canvas.getContext("2d");
      let img = document.createElement("img");
      img.src = base64;
      img.onload = function () {
        context.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
      };
    });
  };

  const setBase64URL = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resizeBase64Img(reader.result, 100, 100).then((url) => setValue(url));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBase64URL(e.target.files[0]);
    }
  };

  const openUpload = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  return (
    <div className={styles.container}>
      <button onClick={openUpload} className={styles.input}>
        Dodaj sliku
      </button>
      <input
        className={styles.hiddenInput}
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <img width="100px" src={value} />
    </div>
  );
}

export default SelectPhoto;
