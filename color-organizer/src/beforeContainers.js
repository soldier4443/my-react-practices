import React from "react";
import PropTypes from "prop-types";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import SortMenu from "./SortMenu";
import { addColor, sortColors, rateColor, removeColor } from "./new/actions";
import { sortFunction } from "./helpers/array-helpers";

export const NewColor = (props, { store }) => (
  <AddColorForm
    onNewColor={(title, color) => store.dispatch(addColor(title, color))}
  />
);

NewColor.contextTypes = {
  store: PropTypes.object
};

export const Menu = (props, { store }) => {
  const sort = sortBy => store.dispatch(sortColors(sortBy));
  return <SortMenu sort={store.getState().sort} onSelect={sort} />;
};

Menu.contextTypes = {
  store: PropTypes.object
};

export const Colors = (props, { store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
  return (
    <ColorList
      colors={sortedColors}
      onRemove={id => store.dispatch(removeColor(id))}
      onRate={(id, rating) => {
        store.dispatch(rateColor(id, rating));
      }}
    />
  );
};

Colors.contextTypes = {
  store: PropTypes.object
};
