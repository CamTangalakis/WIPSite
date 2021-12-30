import { NavLink } from 'react-router-dom'
import './splash.css'

const SplashPage = () => {
    return (
        <div className='splashPageContainer'>
            <h1 className='header'>Works In Progress</h1>
            <div className='underHeader'>
                <p className='underText'>welcome to wip! where everything is in progress...</p>
                <p className='underText'>the number one site for creatives!</p>
            </div>

            <div className='links'>
                <NavLink to='/search-results' className='link' >Search Projects</NavLink>
                <div className='bottom'></div>
                <NavLink to='/home' className='link' >Explore</NavLink>
            </div>
        </div>
    )
}

export default SplashPage
