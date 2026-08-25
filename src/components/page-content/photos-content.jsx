import React, { useState } from "react";
import { photoGroup, photoUrls } from "../../utils/photos-content-utils";
import PhotoCard from "../reusable-components/photo-card";
import PhotoGalleryModal from "../reusable-components/photo-gallery-modal";

//Smaller renditions of each photo, used by the grid.  The grid never shows a tile
//wider than ~419px, so downloading the full size image for it wastes bandwidth.
//Photos small enough that no rendition was generated simply fall back to the full
//size file, which is already tiny.
const thumbModules = import.meta.glob("../../image-thumbs/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});
const thumbs = Object.fromEntries(
  Object.entries(thumbModules).map(([path, url]) => [
    path.replace("../../image-thumbs/", ""),
    url,
  ])
);

//The tiles sit three to a row, so each is roughly a third of the viewport until
//it hits its 419px cap.
const GRID_SIZES = "(min-width: 1400px) 419px, 31vw";

const getGridSources = (photo) => {
  const stem = photo.replace(/\.[^.]+$/, "");
  const small = thumbs[`${stem}-400.webp`];
  const medium = thumbs[`${stem}-800.webp`];

  //Only use a srcset when there is a rendition big enough for a retina tile,
  //otherwise the browser would be stuck picking something too small.
  if (!medium) return {};

  return {
    srcSet: [small && `${small} 400w`, `${medium} 800w`].filter(Boolean).join(", "),
    sizes: GRID_SIZES,
  };
};

//Renders one row of the grid and holds every tile behind a placeholder until all
//of its photos have arrived.  On a slow connection the row then appears in one
//piece instead of the thumbnails popping in at different times.
function PhotoRow({ photos, baseIndex, onOpen, onRefReady }) {
  const present = photos.filter(Boolean).length;
  const [settled, setSettled] = useState(0);
  const revealed = present === 0 || settled >= present;

  const handleLoaded = React.useCallback(() => {
    setSettled((count) => count + 1);
  }, []);

  return (
    <div className="row">
      {photos.map((photo, j) => {
        const photoIndex = baseIndex + j;
        return (
          photo && (
            <PhotoCard
              key={j}
              imagesrc={photoUrls[photo]}
              {...getGridSources(photo)}
              photoName={photo}
              revealed={revealed}
              onLoaded={handleLoaded}
              onClick={(element) => onOpen(photoIndex, element)}
              onRefReady={(element) => onRefReady(photoIndex, element)}
            />
          )
        );
      })}
    </div>
  );
}

export default function PhotosContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const photoCardRefs = React.useRef([]);

  // Flatten all photos into a single array
  const allPhotos = photoGroup.flat().map(photo => photoUrls[photo]);

  const openGallery = (index, element) => {
    photoCardRefs.current[index] = element;
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeGallery = () => {
    setIsModalOpen(false);
    // Return focus to the current photo card (not the one originally clicked)
    setTimeout(() => {
      const elementToFocus = photoCardRefs.current[currentImageIndex];
      if (elementToFocus) {
        elementToFocus.focus();
      }
    }, 0);
  };

  const nextImage = () => {
    if (currentImageIndex < allPhotos.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="column">
        {photoGroup.map((option, i) => {
          const baseIndex = photoGroup.slice(0, i).reduce((acc, group) => acc + group.filter(Boolean).length, 0);
          
          return (
            <PhotoRow
              key={i}
              photos={option}
              baseIndex={baseIndex}
              onOpen={openGallery}
              onRefReady={(photoIndex, element) => {
                photoCardRefs.current[photoIndex] = element;
              }}
            />
          );
        })}
      </div>
      <PhotoGalleryModal
        isOpen={isModalOpen}
        currentIndex={currentImageIndex}
        photos={allPhotos}
        onClose={closeGallery}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
