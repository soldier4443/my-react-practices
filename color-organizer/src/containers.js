import { connect } from "react-redux";
import AddColorForm from "./component/AddColorForm";
import ColorList from "./component/ColorList";
import ColorDetails from "./component/ColorDetails";
import { addColor, rateColor, removeColor } from "./new/actions";
import { sortColors } from "./helpers/array-helpers";
import { findById } from "./helpers/color-helper";

export const NewColor = connect(
  null,
  dispatch => ({
    onNewColor(title, color) {
      dispatch(addColor(title, color))
    }
  })
)(AddColorForm)

export const Colors = connect(
  // Extract colors from state, match from props.
  ({colors}, {match}) => ({
    colors: sortColors(colors, match.params.sort)
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