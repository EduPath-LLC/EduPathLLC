import { useNavigate } from 'react-router-dom';


import logo from '../assets/logo.png';
import '../styles/Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    return(
        <>
            <div className='nav'>
                <img src={logo} alt="Logo" className='logo' role="button" tabIndex="0" style={{ cursor: 'pointer' }} onClick={() => {navigate('/')}} />

                <div className='nav-items'>
                    <p className='nav-text button' role="button" tabIndex="0" style={{ cursor: 'pointer' }} onClick={() => {navigate('/demo')}}> Demo </p>
                    <p className='nav-text button' role="button" tabIndex="0" style={{ cursor: 'pointer' }} onClick={() => {navigate('/pricing')}}> Pricing </p>
                    <p className='nav-text button' role="button" tabIndex="0" style={{ cursor: 'pointer' }} onClick={() => {navigate('/contactus')}}> Contact us </p>
                </div>
            </div>
        </>
    )
}

export default Navbar;