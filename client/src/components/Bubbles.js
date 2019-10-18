import React, { useState, useEffect } from "react";
import { Pack, Treemap } from "@potion/layout";
import { Svg, Circle, Rect } from "@potion/element";

const Bubbles = ({ colors }) => {
  const [bubbleData, setBubbleData] = useState([]);
  useEffect(() => {
    const generateBubbleData = colors.map((_, i) => ({
      value: Math.floor(Math.random() * (colors.length * 2)) + 1,
      key: `${i + 1}`
    }));
    setBubbleData(generateBubbleData);
  }, [colors]);

  return (
    <div className="bubble-wrap">
      <p>bubbles</p>
      <Svg width={400} height={400}>
        <Pack
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          includeRoot={false}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
          {nodes =>
            nodes
              .map(({ x, y, r, key }, i) => {
                if (i < colors.length) {
                  return (
                    <Circle
                      key={key}
                      cx={x}
                      cy={y}
                      r={r}
                      fill={colors[i].code.hex}
                    />
                  );
                }
                return null;
              })
              .filter(v => v)
              
          }
          
        </Pack>
      </Svg>


      {/* <Svg width={400} height={400}>
        <Treemap
          data={{
            children: bubbleData
          }}
          sum={datum => datum.value}
          size={[400, 400]}
          nodeEnter={d => ({ ...d, r: 0 })}
          animate
        >
        {nodes => 
          nodes
            .map(({ key, x0, y0, x1, y1 }, i) => {
              if(i < colors.length) {
                return (
                <Rect
                  key={key}
                  x={x0}
                  y={y0}
                  width={x1 - x0}
                  height={y1 - y0}
                  fill="black"
                  stroke="white"
                />
                );
              }
              return null
            })
            .filter(v => v)
            }
      </Treemap>
  </Svg> */}

    </div>
  );
};

export default Bubbles;
