import React from "react";
import { addColor } from "./new/actions";
import PropTypes from "prop-types";

const AddColorForm = (props, { store }) => {
  let _title, _color;
  const submit = e => {
    // e.preventDefault() -> GET 요청 발생 X
    e.preventDefault();
    store.dispatch(addColor(_title.value, _color.value));
    // reset
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={input => (_title = input)}
        type="text"
        placeholder="색 이름"
        required
      />
      <input ref={input => (_color = input)} type="color" required />
      <button>추가</button>
    </form>
  );
};

AddColorForm.propTypes = {
  store: PropTypes.object
};

AddColorForm.contextTypes = {
  store: PropTypes.object
}

export default AddColorForm;
