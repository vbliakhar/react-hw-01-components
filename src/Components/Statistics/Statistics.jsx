import "./Statistics.scss";

const Statistics = (props) => {
  const getRandomRgbNum = () => Math.floor(Math.random() * 256);
  console.log(getRandomRgbNum());
  return (
    <section className="statistics" background="red">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">
        {props.stats.map((stat) => (
          <li
            key={stat.id}
            className="item"
            style={{ background: "rgb(0, 191, 255)", color: "white" }}
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
