import { useEffect, useState } from "react";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";

export default function Gallery() {
  const images = [
     gallery1,
   
     gallery3,
     gallery4,
     gallery2,
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-semibold mb-8 text-indigo-700 text-center">Our Gallery</h2>
      <div className="w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg">
        <img
          src={images[currentImage]}
          alt={`Gallery Slide ${currentImage + 1}`}
          className="w-full h-64 sm:h-80 md:h-[400px] object-cover transition-all duration-700 ease-in-out"
        />
      </div>
    </section>
  );
}
