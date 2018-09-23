import v4 from "uuid";

const addColor = (title, color) => ({
  type: "ADD_COLOR",
  id: v4(),
  title,
  color,
  timestamp: new Date().toString()
});

const removeColor = id => ({
  type: "REMOVE_COLOR",
  id
});

const rateColor = (id, rating) => ({
  type: "RATE_COLOR",
  id,
  rating
});

const sortColors = sortedBy => ({
  type: "SORT_COLORS",
  sortBy: sortedBy
});

export { addColor, removeColor, rateColor, sortColors };
