import { Image } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  pauseOnHover: true,
};

interface CarouselProps {
  images: string[];
}

export default function Carousel(props: CarouselProps) {
  const { images } = props;

  return (
    <Slider {...settings}>
      {images.map((url) => (
        <Image key={url} src={url} />
      ))}
    </Slider>
  );
}
