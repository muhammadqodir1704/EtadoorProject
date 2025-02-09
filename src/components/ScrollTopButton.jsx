import { useEffect, useState } from "react";
import { IoTriangle } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
      style={{
        width: "61px",
        height: "65px",
        backgroundColor: "#A08961",
      }}
        onClick={scrollToTop}
        className="fixed bottom-64 right-5  text-white shadow-md hover:bottom-72 transition-transform flex items-center justify-center z-10"
      >
        <IoTriangle style={{ fontSize: "30px" }} />
      </button>
    )
  );
};

export default ScrollToTopButton;
