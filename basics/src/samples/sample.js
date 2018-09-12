class BookShelfComponent extends React.Component {
  renderListItem(book, index) {
    return React.createElement("li", { key: index }, book);
  }

  render() {
    return React.createElement(
      "ul",
      { className: "books" },
      this.props.items.map(this.renderListItem)
    );
  }
}

const BookShelf = ({ items }) =>
  React.createElement(
    "ul",
    { className: "books" },
    items.map((book, index) => React.createElement("li", { key: index }, book))
  );

var element = React.createElement(
  "h1",
  { id: "recipe-0", "data-type": "title" },
  "구운 연어"
);

var items = ["First", "Second", "Third", "Fourth", "Fifth"];

ReactDOM.render(
  React.createElement(BookShelf, { items }, null),
  document.getElementById("react-container")
);
