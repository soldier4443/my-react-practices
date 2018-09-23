import React from "react";
import Color from "./Color";
import PropTypes from "prop-types";
import { sortFunction } from "./helpers/array-helpers";

const ColorList = (props, { store }) => {
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
          />
        ))
      )}
    </div>
  );
};

ColorList.contextTypes = {
  store: PropTypes.object
}

export default ColorList;
