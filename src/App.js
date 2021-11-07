import UserMarkup from './components/Profile/User'
import user from './components/Profile/user.json'
import Statistics from './components/Stats/StatisticsList'
import statisticsData from './components/Stats/statistical-data.json'
import FriendsList from './components/Friends/FriendsList'
import friends from './components/Friends/friends.json'
import TransactionHistory from './components/Transactions/TransactionHistory'
import transactionsData from './components/Transactions/transactions.json'
export default function App() {
    return <div>
    <UserMarkup
        imageUrl={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
    
    
    />
        <Statistics
        title ={"Upload Stats"}
        stats ={statisticsData}
        />

        <FriendsList
        friends={friends}
        />

        <TransactionHistory
        transactions={transactionsData}
        />

</div>
}