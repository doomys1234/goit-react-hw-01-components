import UserMarkup from './components/Profile/User'
import user from './components/Profile/user.json'
import Statistics from './components/Stats/StatisticsList'
import statisticsData from './components/Stats/statistical-data.json'
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
        stats ={statisticsData}
        />

</div>
}