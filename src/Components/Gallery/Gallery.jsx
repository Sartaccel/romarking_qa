import React, { useState } from "react";
import "./Gallery.css";
import SplitText from "../../Widgets/SplitText/SplitText";
import TiltedCard from "../../Widgets/SplitText/TiltedCard";
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
import img11 from "../../images/room11.jpg";
import img12 from "../../images/room12.jpg";
import img13 from "../../images/room13.jpg";
import img14 from "../../images/room14.jpg";
import img15 from "../../images/room15.jpg";


const images = [img1, img2,img8, img3, img4, img5, img6 , img7, img9, img11, img12, img13,img10, img14, img15];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="gallery-page">
      
      <SplitText
        text="Dome House Models"
        className="gallery-title text-3xl font-semibold text-center"
        delay={50}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <div className="gallery-container">
        {images.map((img, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(img)}
          >
           <TiltedCard
  imageSrc={img}
  altText={`Gallery Image ${index + 1}`}
  captionText={`Image ${index + 1}`}
  containerHeight="260px"     // keeps row height uniform
  containerWidth="100%"       // let card fill the grid column
  imageHeight="100%"          // image fills the card height
  imageWidth="100%"           // image fills the card width
  rotateAmplitude={10}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip={false}
  displayOverlayContent={false}
/>

          </div>
        ))}
      </div>

      {/* Full-screen modal */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img src={selectedImage} alt="Full view" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;