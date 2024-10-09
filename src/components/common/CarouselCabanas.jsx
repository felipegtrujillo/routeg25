import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/assets/img/cabañas/araucaria/image00001.jpeg",
  "/assets/img/cabañas/araucaria/image00002.jpeg",
  "/assets/img/cabañas/araucaria/image00003.jpeg",
  "/assets/img/cabañas/araucaria/image00004.jpeg",
  "/assets/img/cabañas/araucaria/image00005.jpeg",
  "/assets/img/cabañas/araucaria/image00006.jpeg",
];

const CarouselComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
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
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <div className="flex justify-center items-center h-[70vh] w-[80%] gap-5" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;