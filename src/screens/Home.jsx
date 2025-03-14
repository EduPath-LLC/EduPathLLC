import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

import Navbar from "../components/Navbar";
import '../styles/Home.css'

function Home() {

  const navigate = useNavigate();

  return (
    <>      
      <div className='total'>
        <Navbar />
        <h1 className='title'> EduPath </h1>

        <p className='intro'> EduPath makes it easy for students to find their classrooms, reducing confusion and tardiness. Designed for schools, our intuitive platform provides real-time, turn-by-turn directions to improve campus efficiency. With three flexible plans, EduPath offers everything your school needs—from seamless navigation to full administrative control. </p>

        <div className='buttons'>
            <button className='frontButton' onClick={() => navigate('/demo')}>
              <p> Demo </p>
            <FaArrowRight />
          </button>

          <button className='frontButton' onClick={() => navigate('/pricing')}>
            <p> Pricing </p>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
