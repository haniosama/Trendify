"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
      showArrows={true}
    >
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
        <Image
          src="/image4.png"
          fill
          className="object-cover"
          alt="Image 1"
          priority
        />
      </div>
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
        <Image src="/image2.jpg" fill className="object-cover" alt="Image 2" />
      </div>
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
        <Image src="/image3.jpg" fill className="object-cover" alt="Image 3" />
      </div>
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
        <Image src="/image5.png" fill className="object-cover" alt="Image 4" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
