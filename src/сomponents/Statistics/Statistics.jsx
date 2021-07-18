import "./Statistics.scss";

const Statistics = ({ title, stats }) => {
  // const getRandomRgbNum = () => Math.floor(Math.random() * 256);
  const randomColor = () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map((stat) => {
          const background = randomColor();
          return (
            <li
              key={stat.id}
              className="item"
              style={{
                background: `${background}`,
                color: "white",
              }}
            >
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Statistics;
