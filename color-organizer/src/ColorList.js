import React from "react";
import Color from "./Color";
import { rateColor, removeColor } from "./new/actions";
import { sortFunction } from "./helpers/array-helpers";

const ColorList = ({ store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
  return (
    <div className="color-list">
      {colors.length === 0 ? (
        <p>색이 없습니다. 색을 추가해주세요.</p>
      ) : (
        sortedColors.map(color => (
          <Color
            key={color.id}
            {...color}
            onRate={rating => store.dispatch(rateColor(color.id, rating))}
            onRemove={() => store.dispatch(removeColor(color.id))}
          />
        ))
      )}
    </div>
  );
};

export default ColorList;
