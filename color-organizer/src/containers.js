import React from "react";
import { connect } from "react-redux";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import SortMenu from "./SortMenu";
import { addColor, sortColors, rateColor, removeColor } from "./new/actions";
import { sortFunction } from "./helpers/array-helpers";

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
