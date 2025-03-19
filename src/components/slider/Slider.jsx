import { useState, useEffect } from "react";
import "./slider.css";

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeID, setTimeID] = useState(null);
  const [slideFinished, setSlideFinished] = useState(true);

  useEffect(() => {
    if (slideFinished) {
      setSlideFinished(false);
      setTimeID(
        setTimeout(() => {
          slideNext();
          setSlideFinished(true);
        }, 7000)
      );
    }
  }, [slideFinished]);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val === 0 ? children.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID > 0) {
      clearTimeout(timeID);
      setSlideFinished(false);
    }
  };

  const AutoPlayStart = () => {
    if (!slideFinished) {
      setSlideFinished(true);
    }
  };

  return (
    <div
      className="slider_container"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      <div className={`slider_wrapper active-slide-${activeIndex}`}>
        {children.map((item, index) => (
          <div className="slider_element" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div>
        {children.map((item, index) => {
          return (
            <button
              key={index}
              className={
                activeIndex === index
                  ? "slider_container_links-small slider_container_links-small-active"
                  : "container_slider_links-small"
              }
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
            ></button>
          );
        })}
      </div>
      <button
        className="slider_button-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
      <button
        className="slider_button-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
