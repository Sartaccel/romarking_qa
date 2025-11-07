import React, { useState } from "react";
import "./Gallery.css";

import img1 from "../../images/ro.jpg";
import img2 from "../../images/contactUs.png";
import img3 from "../../images/Products.png";
import img4 from "../../images/Ser.jpg";
import img5 from "../../images/Service.png";
import img6 from "../../images/ThreeDomes.png";

const images = [img1, img2, img3, img4, img5, img6];

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
