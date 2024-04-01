import './App.css'
import { XFollowcard } from './XFollowCard'
const users = [
    {
      userName: 'winternacho',
      name: 'Nacho ❄️',
      isFollowing: true
    },
    {
      userName: 'uchile',
      name: 'Universidad de Chile',
      isFollowing: false
    },
    {
      userName: 'dccuchile',
      name: 'DCCUChile',
      isFollowing: false
    },

  ]
export function App() {
    return (
        <section className = 'App'>
            {
            users.map(({userName, name, isFollowing}) => (
                <XFollowcard
                    key = {userName}
                    userName = {userName}
                    name = {name}
                    initialIsFollowing = {isFollowing}/>       
            ))   
            }
        </section>
    )
}
