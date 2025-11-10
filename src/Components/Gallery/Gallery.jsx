import React, { useState } from "react";
import "./Gallery.css";

import img1 from "../../images/roam5.jpg";
import img2 from "../../images/roam.jpg";
import img3 from "../../images/roam4.jpg";
import img4 from "../../images/roam3.jpg";
import img5 from "../../images/roam2.jpg";
import img6 from "../../images/ThreeDomes.png";
import img7 from "../../images/roam1.jpg";
import img8 from "../../images/img7.jpg";
import img9 from "../../images/img8.jpg";
import img10 from "../../images/img9.jpg";


const images = [img1, img2, img3, img4, img5, img6 , img7,img8, img9, img10 ];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-container">
        {images.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openImage(img)}>
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Full-screen modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImage}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Full view" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
