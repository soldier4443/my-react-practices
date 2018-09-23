import { connect } from "react-redux";
import AddColorForm from "./component/AddColorForm";
import ColorList from "./component/ColorList";
import SortMenu from "./component/SortMenu";
import ColorDetails from "./component/ColorDetails";
import { addColor, sortColors, rateColor, removeColor } from "./new/actions";
import { sortFunction } from "./helpers/array-helpers";
import { findById } from "./helpers/color-helper";

export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title, color))
    }
  })
)(AddColorForm)

export const Menu = connect(
  state => ({
    sort: state.sort
  }),
  dispatch => ({
    onSelect(sortBy) {
      dispatch(sortColors(sortBy))
    }
  })
)(SortMenu)

export const Colors = connect(
  state => ({
    colors: [...state.colors].sort(sortFunction(state.sort))
  }),
  dispatch => ({
    onRemove(id) {
      dispatch(removeColor(id));
    },
    onRate(id, rating) {
      dispatch(rateColor(id, rating));
    }
  })
)(ColorList);

export const Color = connect(
  (state, props) => findById(state.colors, props.match.params.id)
)(ColorDetails)