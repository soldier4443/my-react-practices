class Dashboard extends React.Component {
  render() {
    const { projects, todoCount, name } = this.props;
    return (
      <div>
        <h1>
          {name}'s workspace
        </h1>
        <h2>Projects</h2>
        <ul>
          {projects.map((project, index) => (
            <Project {...project} />
          ))}
        </ul>
        <p>Total Todos: {todoCount}</p>
      </div>
    )
  }
}

// Class의 경우 밖으로 따로 빼서 설정.
Dashboard.propTypes = {
  // projects - array 타입이고 지정해야 함.
  projects: PropTypes.array.isRequired,
  todoCount: PropTypes.number,
  name: (props, propName) => 
    (typeof props[propName] !== 'string') ? new Error("name must be a string.") : 
    (typeof props[propName].length > 20) ? new Error("name should be shorter than 20 letters.") :
    null
}

Dashboard.defaultProps = {
  projects: [],
  todoCount: 0,
  name: "No name"
}

let items = {
  projects: [
    {
      name: "PMS",
      description: "Project Management System"
    },
    {
      name: "Diligent",
      description: "Kotlin DSL RxJava network library"
    }
  ],
  todoCount: 12,
  name: "tura"
};

ReactDOM.render(
  <Dashboard {...items} />,
  document.getElementById("react-container")
);
