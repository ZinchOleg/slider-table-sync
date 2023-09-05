import React, { useCallback, useEffect, useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import { Items } from "../types";

type Props = {
  items: Items;
  slideWidth: number;
  scrollLeft: number;
  setOffsetX: React.Dispatch<React.SetStateAction<number>>;
};

const ON_SCROLL_DELAY = 500;

function Table({ items, slideWidth, scrollLeft, setOffsetX }: Props) {
  const tableWrapperRef = useRef<HTMLDivElement | null>(null);
  const tableRef = useRef<HTMLTableElement | null>(null);

  useEffect(() => {
    if (!tableWrapperRef.current) return;

    tableWrapperRef.current.scrollLeft = scrollLeft;
  }, [scrollLeft]);

  const onScroll: React.UIEventHandler<HTMLDivElement> = useCallback(() => {
    if (!tableRef.current) return;

    const { x } = tableRef.current.getBoundingClientRect();
    setOffsetX(Math.abs(x));
  }, []);

  const debouncedOnScroll = useDebounce(onScroll, ON_SCROLL_DELAY);

  return (
    <>
      <div
        className="table-wrapper"
        onScroll={debouncedOnScroll}
        ref={tableWrapperRef}
      >
        <table ref={tableRef}>
          <tbody className="feature-value-row">
              {items.map((item) => (
                <tr className="info-block" key={item.id}>
                  <th style={{margin: '10px'}}>{item.title}</th>
                  {
                    item.features.map((feature, i) => {
                      return <tr key={i}>{feature.value}</tr>;
                    })
                  }
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* <style jsx>{`
        .feature-value-row {
          display: grid;
          grid-template-columns: repeat(${items.length}, ${slideWidth - 1}px);
        }
      `}</style> */}
      <style jsx>{`
        .feature-value-row {
          display: flex;
          width: ${items.length * slideWidth}px;
        }
        .info-block {
          width: ${slideWidth}px;
        }
      `}</style>
    </>
  );
}

export default Table;

{/* <tr className="feature-name-row">
  <td colSpan={items.length}>
    <span className="feature-name">{FEATURE_NAMES[i]}</span>
  </td>
</tr>
  {items.map((_, j) => {
    const key = "" + i + j;
    return <tr key={key}>{items[j].features[i].value}</tr>;
  })} */}
