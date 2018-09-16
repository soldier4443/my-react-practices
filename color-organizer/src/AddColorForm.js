import React from "react";

class AddColorForm extends React.Component {
  constructor(props) {
    super(props);
    // 바인딩
    this.submit = this.submit.bind(this);
  }

  submit = e => {
    const { _title, _color } = this.refs;
    // e.preventDefault() -> GET 요청 발생 X
    e.preventDefault();
    console.log(_color.value)
    this.props.onNewColor(_title.value, _color.value);
    // reset
    _title.value = "";
    _color.value = "#000000";
    _title.focus();
  };

  render = () => {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" type="text" placeholder="색 이름" required />
        <input ref="_color" type="color" required />
        <button>추가</button>
      </form>
    );
  };
}

export default AddColorForm;
