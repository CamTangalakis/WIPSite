import { NavLink } from 'react-router-dom'
import './splash.css'

const SplashPage = () => {
    return (
        <div className='splashPageContainer'>
            <div className='Container'>
                <div className='headerContainer'>
                    <h1 className='header'>Works In Progress</h1>
                </div>

                <div className='list'>
                    <p className='under'>where creatives come to</p>
                    <p className='bit'>Share Work</p>
                    <p className='bit'>Track Progress</p>
                    <p className='bit'>Get Inspired</p>
                </div>

                <div className='Join'>
                    <p className='join'>Join the Community Today!</p>
                    <div className='theseLinks'>
                        <NavLink to='/login' className='form' >
                                Log In
                        </NavLink>
                        <NavLink to='/signup' className='form' >
                            Sign up
                        </NavLink>
                    </div>
                </div>


                <div className='underHeader'>
                    <div className='links'>
                        <NavLink to='/search-results' className='link' >
                            <i className="fas fa-search fa-2x"></i>
                        </NavLink>
                    </div>
                    <div className='links'>
                        <NavLink to='/home' className='link' >
                            <i className="far fa-compass fa-2x"></i>
                        </NavLink>
                    </div>
                    <div className='links'>
                        <NavLink to='/newProject' className='link'>
                            <i className="fas fa-pencil-alt fa-2x"></i>
                        </NavLink>
                    </div>
                </div>

                <div className='underLinks'>
                    <p className='linkyBit'>Search</p>
                    <p className='linkyBit'>Explore</p>
                    <p className='linkyBit'>Share</p>
                </div>
            </div>

            {/* <div className='devInfo'>
                <div className='devName'><strong>Cam Tangalakis</strong></div>
                <a className='devIn' href='https://www.linkedin.com/in/cam-tangalakis-lippert-9b4a11129'><i className="fab fa-linkedin fa-lg"></i></a>
                <a className='devGit' href='https://github.com/CamTangalakis'><i className="fab fa-github-square fa-lg"></i></a>
            </div> */}
        </div>
    )
}

export default SplashPage
