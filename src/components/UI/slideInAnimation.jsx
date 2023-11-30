import React, {useRef, useCallback, useState} from "react";

export default function SlideInAnimation({ firstChild, secondChild, className }) {
  const observeEl = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const observeImage = useRef(null);
  const [isImageVisible, setImageVisible] = useState(false);

  /// Get the exiting element
  const existingElement = useCallback((node) => {
    observeEl.current = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    if (node) observeEl.current.observe(node);
  }, []);

  const existingImage = useCallback((node) => {
    observeImage.current = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) {
        setImageVisible(true);
      } else {
        setImageVisible(false);
      }
    });

    if (node) observeImage.current.observe(node);
  }, []);
  return (
    <div className={className}>
      <div
        ref={existingElement}
        className={`${
          isVisible
            ? "opacity-0 -translate-x-[80%]"
            : "opacity-100 translate-x-0"
        } w-full duration-700 transform  transition-all`}
      >
        {firstChild}
      </div>

      <div
        ref={existingImage}
        className={` ${
          isImageVisible
            ? "opacity-0 translate-x-[80%]"
            : "opacity-100 translate-x-0"
        } w-full h-fit duration-700 transform transition-all `}
      >
        {secondChild}
      </div>
    </div>
  );
}
