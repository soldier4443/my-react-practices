import Recipe from "./Recipe";
import "./stylesheets/Menu.css";

const Menu = ({ title, recipes }) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, index) => (
        <Recipe
          key={index}
          {...recipe} // recipe 객체의 property를 Recipe 컴포넌트의 프로퍼티로 추가
        />
      ))}
    </div>
  </article>
);

export default Menu;