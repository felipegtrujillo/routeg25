'use client'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

const CarouselComponent = ({ images }) => {
  return (
    <div className="flex justify-center items-center h-full sm:h-[70vh] w-full">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
        transitionTime={500}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
        showStatus={false}
        centerMode={true}
        centerSlidePercentage={50}
        stopOnHover={false}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <div className="flex justify-center items-center h-[50vh] w-[90%] sm:h-[50vh] sm:w-[80%] gap-5" key={index}>
            <Image src={image} alt={`Image ${index + 1}`} className="object-cover" width={800} height={700} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
