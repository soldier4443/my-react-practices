// let webpack do some jobs for us.
import React from 'react'
import { render } from 'react-dom'
import Menu from "./Menu"
import data from "./data/recipes"

// 브라우저 전체가 리액트 라이브러리를 볼 수 있다??
window.React = React

// 마운트 + 렌더!
ReactDOM.render(
  <Menu recipes={data} title="맛있는 조리법" />,
  document.getElementById("react-container")
);
