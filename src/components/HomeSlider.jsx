import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import { sliderData } from "../constants/homeSlider";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'animate.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const HomeSlider = () => {
//   SwiperCore.use([Autoplay]);
const [text] = useTypewriter({
    words: ['Artistry Unleashed', 'Imagination Unbound', 'Creativity Unleashed'],
    loop: true,
    delay: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
  return (
    <Swiper
      enteredSlides={true}
      autoplay={{ delay: 10000 }}
      loop={true}
      effect="Flip"
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    
    >
      {sliderData.map((data) => (
        <SwiperSlide key={data.title} >
          <div
            style={{
              "--image-url": `linear-gradient(45deg,rgba(0,0,0,0.9),rgba(0,0,0,0.3)),url(${data.backgroundImage})`,
            }}
            className={`min-h-[calc(100vh-96px)] px-10 flex flex-col justify-center items-center space-y-3 text-center bg-cover text-white bg-[image:var(--image-url)]`}
          >
            <h2 className="lg:text-7xl text-5xl ">Brushstrokes of Beauty : <br /> Discover  <span className="text-blue-400">{text}</span> <Cursor cursorColor='white' /> </h2>
            <p className="lg:text-xl lg:w-3/4">{data.content}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;