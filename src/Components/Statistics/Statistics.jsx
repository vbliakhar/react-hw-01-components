import "./Statistics.scss";

const Statistics = (props) => {
  // const getRandomRgbNum = () => Math.floor(Math.random() * 256);
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        {props.stats.map((stat) => (
          <li
            key={stat.id}
            className="item"
            style={{
              background: `${randomColor}`,
              color: "white",
            }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
