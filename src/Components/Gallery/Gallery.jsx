import React, { useState } from "react";
import "./Gallery.css";
import { Helmet } from "react-helmet";
import TiltedCard from "../../Widgets/SplitText/TiltedCard";
import NovaVideo1 from "../../images/DomeVideo.mp4";
import img1 from "../../images/room5.jpg";
import img2 from "../../images/roam.jpg";
import img3 from "../../images/roam4.jpg";
import img4 from "../../images/roam3.jpg";
import img5 from "../../images/roam2.jpg";
import img6 from "../../images/ThreeDomes.png";
import img7 from "../../images/roam1.jpg";
import img8 from "../../images/room6.jpg";
import img9 from "../../images/room7.jpg";
import img10 from "../../images/room8.jpg";
import img11 from "../../images/room11.jpg";
import img12 from "../../images/room12.jpg";
import img13 from "../../images/room13.jpg";
import img14 from "../../images/room14.jpg";
import img15 from "../../images/room15.jpg";
import Dome1 from "../../images/Dome_View1.png";
import Dome2 from "../../images/Dome_View2.png";
import Dome3 from "../../images/Dome_View3.jpeg";
import Dome5 from "../../images/Dome_View4.jpeg";
import Dome6 from "../../images/Dome_View5.jpeg";
import Dome7 from "../../images/Dome_View6.jpeg";

const domeHouseImages = [
  img1,
  img2,
  img8,
  img3,
  img4,
  img5,
  img6,
  img7,
  img9,
  img11,
  img12,
  img13,
  img10,
  img14,
  img15,
].map((img) => ({ type: "image", src: img }));

const novaNestImages = [
  { type: "image", src: Dome1 },
  { type: "image", src: Dome2 },
  { type: "image", src: Dome3 },
  { type: "image", src: Dome5 },
  { type: "image", src: Dome6 },
  { type: "image", src: Dome7 },

  { type: "video", src: NovaVideo1 },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("dome");

  const imagesToShow =
    activeCategory === "dome" ? domeHouseImages : novaNestImages;

  return (
    <div className="gallery-page">
            <Helmet>
        <title>Romarking Gallery | FRP Dome Houses & Nova Nest Designs</title>

        <meta
          name="description"
          content="Explore the Romarking gallery featuring innovative FRP Dome Houses, Nova Nest designs, eco-resort structures, and sustainable living solutions."
        />

        <meta
          name="keywords"
          content="Romarking gallery, FRP dome house images, Nova Nest homes, eco resort dome houses, prefabricated dome homes gallery"
        />
      </Helmet>
      <div className="gallery-tabs">
        <span
          className={`gallery-tab ${activeCategory === "dome" ? "active" : ""}`}
          onClick={() => setActiveCategory("dome")}
        >
          Dome House
        </span>

        <span
          className={`gallery-tab ${activeCategory === "nova" ? "active" : ""}`}
          onClick={() => setActiveCategory("nova")}
        >
          Nova Nest
        </span>
      </div>

      <div className="gallery-container">
        {imagesToShow.length > 0 ? (
          imagesToShow.map((item, index) => (
            <div key={index} className="gallery-item">
              {item.type === "image" && (
                <div onClick={() => setSelectedImage(item.src)}>
                  <TiltedCard
                    imageSrc={item.src}
                    altText={`Romarking FRP Dome House ${index + 1}`}
                    captionText={`Image ${index + 1}`}
                    containerHeight="260px"
                    containerWidth="100%"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={false}
                    displayOverlayContent={false}
                  />
                </div>
              )}

              {item.type === "video" && (
                <div className="video-wrapper">
                  <video
                    src={item.src}
                    className="gallery-video"
                    controls
                    muted
                    preload="metadata"
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-images">Images coming soon…</p>
        )}
      </div>

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
