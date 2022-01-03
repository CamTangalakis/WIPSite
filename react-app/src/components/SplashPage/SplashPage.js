import { NavLink } from 'react-router-dom'
import './splash.css'

const SplashPage = () => {
    return (
        <div className='splashPageContainer'>
            <div className='Container'>
                <h1 className='header'>Works In Progress</h1>
                <div className='underHeader'>
                    <div className='right'>
                        <p className='underText'><strong>welcome to wip!</strong> </p>
                        <p className='underText'>where everything</p>
                        <p className='underText'>is in progress...</p>
                    </div>
                    <div className='links'>
                        <NavLink to='/search-results' className='link' >
                            <i className="fas fa-search fa-3x"></i>
                        </NavLink>
                    </div>

                </div>

                <div className='underHeader'>
                    <div className='links'>
                        <NavLink to='/home' className='link' >
                            <i className="far fa-compass fa-3x"></i>
                        </NavLink>
                    </div>
                    <p className='underText big'>#1</p>
                    <div className='down'>
                        <p className='underText'>site for</p>
                        <p className='underText'>creatives!</p>
                    </div>
                </div>

                <div className='underHeader'>
                    <div>
                        <p className='underText'>start your</p>
                        <p className='underText'>free account</p>
                    </div>
                    <div className='links'>
                        <NavLink to='/signup' className='link' >
                            <i className="fas fa-user-plus fa-3x"></i>
                        </NavLink>
                    </div>
                </div>

                <div className='underHeader'>
                    <div className='links'>
                        <NavLink to='/newProject' className='link'>
                            <i className="fas fa-pencil-alt fa-3x"></i>
                        </NavLink>
                    </div>
                    <div>
                        <p className='underText'>and start sharing</p>
                        <p className='underText'>your progress today!</p>
                    </div>
                </div>
            </div>

            <div className='devInfo'>
                <div className='devName'><strong>Cam Tangalakis</strong></div>
                <a className='devIn' href='https://www.linkedin.com/in/cam-tangalakis-lippert-9b4a11129'><i className="fab fa-linkedin fa-lg"></i></a>
                <a className='devGit' href='https://github.com/CamTangalakis'><i className="fab fa-github-square fa-lg"></i></a>
            </div>
        </div>
    )
}

export default SplashPage
