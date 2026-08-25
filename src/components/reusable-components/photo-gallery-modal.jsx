import React from "react";
import Style from "style-it";
import CircularButton from "./circular-button";

export default function PhotoGalleryModal(props) {
  const { isOpen, currentIndex, photos, onClose, onNext, onPrev } = props;
  const prevButtonRef = React.useRef(null);
  const nextButtonRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === photos.length - 1;



  const handlePrev = () => {
    if (!isFirstImage) {
      onPrev();
      setTimeout(() => prevButtonRef.current?.focus(), 0);
    }
  };

  const handleNext = () => {
    if (!isLastImage) {
      onNext();
      setTimeout(() => nextButtonRef.current?.focus(), 0);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
    
    // Trap focus within modal
    if (e.key === "Tab") {
      const focusableElements = [
        closeButtonRef.current,
        !isFirstImage && prevButtonRef.current,
        !isLastImage && nextButtonRef.current,
      ].filter(Boolean);
      
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex, isFirstImage, isLastImage]);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => closeButtonRef.current?.focus(), 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const styles = `
    .gallery-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      z-index: 10000;
      padding: 1rem;
      gap: 2rem;
    }

    .gallery-container {
      position: relative;
      width: min(60vw, 700px);
      height: min(70vh, 525px);
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 0.5rem;
    }

    .close-button {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .image-counter {
      position: absolute;
      bottom: 1rem;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(255, 255, 255, 0.9);
      padding: 0.5rem 1rem;
      border-radius: 1.5rem;
      color: var(--brown);
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .gallery-overlay {
        gap: 0.5rem;
        padding: 0.5rem;
      }

      .gallery-container {
        max-width: calc(90vw - 6rem);
      }

      .close-button {
        top: 0.5rem;
        right: 0.5rem;
      }

      .gallery-image {
        max-height: 80vh;
      }
    }
  `;

  return Style.it(
    styles,
    <div className="gallery-overlay flex-center">
      <CircularButton 
        buttonRef={closeButtonRef}
        className="close-button" 
        onClick={onClose}
        ariaLabel="Close gallery"
        zIndex={10001}
      >
        ✕
      </CircularButton>
      <CircularButton 
        buttonRef={prevButtonRef}
        onClick={handlePrev}
        disabled={isFirstImage}
        ariaLabel="Previous photo"
      >
        ‹
      </CircularButton>
      <div className="gallery-container flex-center flex-shrink-0">
        <img
          className="gallery-image"
          src={photos[currentIndex]}
          alt={`gallery-${currentIndex + 1}`}
        />
      </div>
      <CircularButton 
        buttonRef={nextButtonRef}
        onClick={handleNext}
        disabled={isLastImage}
        ariaLabel="Next photo"
      >
        ›
      </CircularButton>
      <div className="image-counter">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}
