import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const CarouselItem = ({ title, subtitle }) => {
  return (
    <div className="border border-gray-200 p-8 rounded-sm flex flex-col m-2">
      <div className="flex align-center justify-between mb-4">
        <Image src={"/cube.svg"} width={34} height={34} alt="cube" />
        <Image src={"/dot.svg"} width={24} height={24} alt="cube" />
      </div>
      <span className="font-lg font-semibold">{title}</span>
      <span className="font-extralight text-sm mt-2 text-gray-400">
        {subtitle}
      </span>
    </div>
  );
};

export default function ServiceCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="container mt-6">
      <div className="d-block w-100 m-lg-4">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="fm-carousel-dot"
          itemClass="fm-carousel-item"
          style={{
            display: "block !important",
          }}
        >
          <div>
            <CarouselItem
              title="Prestijli Konum"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>
          <div>
            <CarouselItem
              title="7/24 Güvenlik"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>

          <div>
            <CarouselItem
              title="Sekreterlik"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>

          <div>
            <CarouselItem
              title="Toplantı Odaları"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>

          <div>
            <CarouselItem
              title="Fiber Internet"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>

          <div>
            <CarouselItem
              title="Kartlı Giriş"
              subtitle="Bazen günlük aktiviteleri ve işlevleri etkileyebilecek derecede şiddetli olabilir."
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
