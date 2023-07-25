import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [{ name: "especial", label: "Фильтр задач..." }];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => props.showWish()}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group angst">{buttons}</div>;
};

export default AppFilter;
