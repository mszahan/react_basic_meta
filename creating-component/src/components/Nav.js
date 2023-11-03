import { Link } from "react-router-dom";

const Nav = props => {
    return(
        <nav className='main-nav'>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/forms'>Forms</Link></li>
                <li><Link to='/props-drill'>Drills</Link></li>
                <li><Link to='/ride'>Ride</Link></li>
                <li>{props.title}</li>

            </ul>
        </nav>
    );
    }

export default Nav;