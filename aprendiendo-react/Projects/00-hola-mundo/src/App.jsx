import './App.css'
import {TwitterFollowCard} from './TwitterFollowCard.jsx'
export function App() {
    
    return (
        <section className='App'>
            <TwitterFollowCard userName='midudev'>
             Miguel Ángel Durán
            </TwitterFollowCard>
            

            <TwitterFollowCard userName='elonmusk'>
            Elon Musk
            </TwitterFollowCard>
        </section>
    )
}