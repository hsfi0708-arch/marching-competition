import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos = [
  "/participants/1.jpg",
  "/participants/2.jpg",
  "/participants/3.jpg",
  // add more photo URLs
];

export default function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false
  };
  return (
    <div className="max-w-xl mx-auto my-8 animate-fadeIn">
      <Slider {...settings}>
        {photos.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img src={src} alt={`Participant ${idx + 1}`} className="w-full h-64 object-cover rounded-xl shadow" />
          </div>
        ))}
      </Slider>
    </div>
  );
}