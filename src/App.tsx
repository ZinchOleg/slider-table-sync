import { useState } from "react";
import Slider from "./components/Slider";
import Table from "./components/Table";
import data from "./mock-data";

function App() {
  const [slideWidth, setSlideWidth] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  return (
    <div className="app">
      <h1>Comparison table</h1>
      <Slider
        items={data}
        setSlideWidth={setSlideWidth}
        setScrollLeft={setScrollLeft}
        offsetX={offsetX}
      />
      <Table
        items={data}
        slideWidth={slideWidth}
        scrollLeft={scrollLeft}
        setOffsetX={setOffsetX}
      />
      <img src="./kisspng-mazda-rx-7-sports-car-mazda-rx-3-rx7-5b4ccb6d4b4ec1.4833586315317594693085.png" className="bg"/>
    </div>
  );
}

export default App;
