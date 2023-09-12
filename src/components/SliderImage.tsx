import { Data } from "../types";

type Props = {
  data: Data;
};

const SliderImage = ({ data }: Props) => {

  return (
    <div className="slide-item">
      <img  height={'275px'} src={data.imageUrl} alt={data.title} />
      <div className="item-info">
        <h2>{data.title}</h2>
        <p className="price">
          <span>Price:</span>
          <span>{data.price}$</span>
        </p>
      </div>
    </div>
  )
}

export default SliderImage;
