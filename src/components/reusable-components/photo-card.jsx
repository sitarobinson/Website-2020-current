import { useRef, useEffect } from "react";
import Style from "style-it";
import { Skeleton } from "./skeleton";

function PhotoCard(props) {
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const reportedRef = useRef(false);
  const { onLoaded } = props;

  useEffect(() => {
    if (cardRef.current && props.onRefReady) {
      props.onRefReady(cardRef.current);
    }
  }, [props]);

  //A cached image can already be complete before React attaches onLoad, so the
  //row would wait forever for an event that never fires.
  useEffect(() => {
    if (reportedRef.current || !onLoaded) return;
    if (imgRef.current && imgRef.current.complete) {
      reportedRef.current = true;
      onLoaded();
    }
  }, [onLoaded]);

  const handleSettled = () => {
    if (reportedRef.current || !onLoaded) return;
    reportedRef.current = true;
    onLoaded();
  };

  const handleClick = () => {
    props.onClick(cardRef.current);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      props.onClick(cardRef.current);
    }
  };

  // Extract a readable description from the photo filename
  const getPhotoDescription = (filename) => {
    if (!filename) return "Photo";
    // Remove file extension and convert to readable format
    const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|gif|webp|svg)$/i, '');
    // Replace underscores and hyphens with spaces, capitalize words
    const readable = nameWithoutExt
      .replace(/[_-]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase());
    return readable;
  };

  const photoDescription = getPhotoDescription(props.photoName);

  const styles = `
    .photo-card {
        margin: 0;
        padding: 0;
        cursor: pointer;
        flex: 1;
        min-width: 0;
        max-width: 26.17rem;
    }

    .photo-card:focus {
        outline: 2px solid var(--accent);
        outline-offset: 2px;
        border-radius: 1rem;
    }

    .image-fit{
        border-radius: 1rem;
        object-fit: cover; 
        width: 100%;
        height: auto;
        aspect-ratio: 1;
        display: block;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .photo-card:hover .image-fit {
        transform: scale(1.05);
        box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.3);
    }

    .photo-frame {
        position: relative;
    }

    .photo-placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }

    .image-fit.is-loading {
        opacity: 0;
    }

    .image-fit.is-ready {
        opacity: 1;
        transition: opacity 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
    }
    `;

  //The whole row is revealed at once, so a slow connection shows a block of
  //placeholders filling in together rather than photos popping in one by one.
  const revealed = props.revealed !== false;

  return Style.it(
    styles,
    <div
      ref={cardRef}
      className="photo-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open ${photoDescription} in gallery`}
    >
      <div className="photo-frame">
        <img
          ref={imgRef}
          className={`image-fit ${revealed ? "is-ready" : "is-loading"}`}
          loading="lazy"
          src={props.imagesrc}
          srcSet={props.srcSet}
          sizes={props.sizes}
          alt={photoDescription}
          onLoad={handleSettled}
          onError={handleSettled}
        />
        {!revealed && (
          <div className="photo-placeholder">
            <Skeleton aspect="1" radius="1rem" />
          </div>
        )}
      </div>
    </div>
  );
}

export default PhotoCard;
