import { Data } from "../types";

type Props = {
  data: Data;
};

const SliderImage = ({ data }: Props) => {

  return (
    <div className="info-block" key={data.id}>
      <p className='table-title'>{data.title}</p>
      {
        data.features.map((feature, i) => {
          return <div className='features' key={i}>
            <span>{feature.type}</span>
            <span>{feature.value}</span>
          </div>;
        })
      }
    </div>
  )
}

export default SliderImage;