import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ImageScroller({ images }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    const newIndex = Math.max(activeIndex - 1, 0);
    setActiveIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * 370,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const newIndex = Math.min(activeIndex + 1, images.length - 1);
    setActiveIndex(newIndex);

    scrollRef.current.scrollTo({
      left: newIndex * 370,
      behavior: "smooth",
    });
  };

  return (
    <div className="position-relative mt-4">
      {/* LEFT ARROW */}
      <button
        onClick={scrollLeft}
        className="btn btn-dark position-absolute top-50 start-0 translate-middle-y"
        style={{ zIndex: 10 }}
      >
        <FaChevronLeft />
      </button>

      {/* IMAGE STRIP */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "20px",
          overflow: "hidden",
          padding: "20px 50px",
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Sunbeam"
            style={{
              width: "350px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "all 0.4s ease",
              transform:
                index === activeIndex ? "scale(1.12)" : "scale(0.95)",
              boxShadow:
                index === activeIndex
                  ? "0 10px 25px rgba(0,0,0,0.45)"
                  : "0 4px 8px rgba(0,0,0,0.2)",
              border:
                index === activeIndex
                  ? "3px solid #0dcaf0"
                  : "none",
            }}
          />
        ))}
      </div>

      {/* RIGHT ARROW */}
      <button
        onClick={scrollRight}
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y"
        style={{ zIndex: 10 }}
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default ImageScroller;
