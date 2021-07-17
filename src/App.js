import "./App.css";
// import Profile from "./Components/Profile/Profile";
// import user from "./Components/Profile/user.json";
import Statistics from "./Components/Statistics/Statistics";
import statisticalData from "./Components/Statistics/statistical-data.json";
function App() {
  return (
    <div className="App">
      {/* <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      <Statistics title="Upload stats" stats={statisticalData} />
    </div>
  );
}

export default App;
