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
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
