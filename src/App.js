import "./App.css";
import user from "./сomponents/Profile/user.json";
import Profile from "./сomponents/Profile/Profile";
import statisticalData from "./сomponents/Statistics/statistical-data.json";
import Statistics from "./сomponents/Statistics/Statistics";
import friends from "./сomponents/FriendList/friends.json";
import FriendList from "./сomponents/FriendList/FriendList";
import transactions from "./сomponents/TransactionHistory/transactions.json";
import TransactionHistory from "./сomponents/TransactionHistory/TransactionHistory";
function App() {
  return (
    <div className="App">
      <h1>Task 1</h1>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Task 2</h1>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h1>Task 3</h1>
      <FriendList friends={friends} />
      <h1>Task 4</h1>
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
