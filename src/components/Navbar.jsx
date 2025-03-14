import { useNavigate } from 'react-router-dom';


import logo from '../assets/logo.png';
import '../styles/Navbar.css'

function Navbar() {
    const navigate = useNavigate();
    return(
        <>
            <div className='nav'>
                <img src={logo} alt="Logo" className='logo' onClick={() => {navigate('/')}} />

                <div className='nav-items'>
                    <p className='nav-text' onClick={() => {navigate('/demo')}}> Demo </p>
                    <p className='nav-text' onClick={() => {navigate('/pricing')}}> Pricing </p>
                    <p className='nav-text' onClick={() => {navigate('/contactus')}}> Contact us </p>
                </div>
            </div>
        </>
    )
}

export default Navbar;