import { useEffect, useState } from "react";
import { IoTriangle } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
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
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-5 w-16 h-16 bg-[#A08961] text-white shadow-md flex items-center justify-center rounded-md transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}>
      <IoTriangle className="text-3xl" />
    </button>
  );
};

export default ScrollToTopButton;
