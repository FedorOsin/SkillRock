import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";

const images = [image1, image2, image3, image4];

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.carouselContainer}>
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className={styles.carouselImage}
      />
      <div className={styles.buttonContainer}>
        <button onClick={handlePrevClick} className={styles.button}>
          Назад
        </button>
        <button onClick={handleNextClick} className={styles.button}>
          Вперед
        </button>
      </div>
    </div>
  );
}

export default App;
