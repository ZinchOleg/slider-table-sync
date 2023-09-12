import { useState } from "react";
import SliderTable from "./components/SliderTable";
import data from "./mock-data";
import { Navigation, Pagination, Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import SliderImage from "./components/SliderImage";

const SLIDES_PER_VIEW = 3;

const App = () => {
  const [firstSwiper, setFirstSwiper] = useState<SwiperType | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperType | null>(null);

  const sliderSettings = {
    440: {
      slidesPerView: 1,
    },
    680: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="app">
      <Swiper
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        modules={[Controller, Navigation, Pagination]}
        navigation={SLIDES_PER_VIEW < data.length}
        pagination={ SLIDES_PER_VIEW < data.length ? {clickable: true} : undefined }
        // slidesPerView={SLIDES_PER_VIEW}
        breakpoints={sliderSettings}
        spaceBetween={12}
        // slidesPerView='auto'
      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderImage data={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <h1>Comparison table</h1>

      <Swiper
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
        modules={[Controller, Navigation, Pagination]}
        // navigation={3 < data.length}
        pagination={ 3 < data.length ? {clickable: true } : undefined }
        // slidesPerView={3}
        breakpoints={sliderSettings}
        // slidesPerView='auto'

      >
        {
          data.map((item) => (
            <SwiperSlide key={item.id}>
              <SliderTable data={item} />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <img src="./kisspng-mazda-rx-7-sports-car-mazda-rx-3-rx7-5b4ccb6d4b4ec1.4833586315317594693085.png" className="bg"/>
    </div>
  );
}

export default App;
