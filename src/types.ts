import type Swiper from "swiper";

export type Feature = {
  type: string;
  value: string;
};

export type Data = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  features: Feature[];
};

export type Items = Data[];

export type TSwiper = Swiper & {
  slides: {
    swiperSlideSize: number;
  }[];
  slidesGrid: number[];
};
