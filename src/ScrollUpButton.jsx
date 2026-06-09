import { useEffect, useState } from "react";
import arrowup from './components/assets/arrowup.png'

export default function ScrollUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <img src={arrowup} alt="arrowup" 
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "12px 15px",
        // borderRadius: "50%",
        border: "none",
        color: "#fff",
        fontSize: "18px",
        cursor: "pointer",
        zIndex: 1000,
        width:'50px',
        height:'50px',
      }}
      
    />
  );
}
