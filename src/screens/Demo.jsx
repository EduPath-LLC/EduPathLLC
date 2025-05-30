import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/Demo.css';
import LocationLock from '../assets/LocationLock.jpg';
import ScheduleViewer from '../assets/ScheduleViewer.jpg';
import SchoolEmail from '../assets/SchoolEmail.jpg';
import Lock from '../assets/lock.png';

function Demo() {
  return (
    <div className="total">
      <Navbar />

      <div className='demoPage'>
      <header className="demoHeader">
        <h1>EduPath Demo</h1>
        <p>Navigate campus securely. Stay on top of your schedule.</p>
      </header>

      <main className="demoContent">

        {/* Email Verification */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={Lock} style={{height: '100%' }} />
          </div>
          <h2>Email Verification</h2>
          <p>Only verified school emails are allowed. This ensures secure, student-only access to all features.</p>
        </section>

        {/* Location Lock */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
            <img src={LocationLock}/>
          </div>
          <h2>Location Lock</h2>
          <p>Map features only unlock when you're physically on campus. No spoofing, no remote access.</p>
        </section>

        {/* School Email Only */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={SchoolEmail} />
          </div>
          <h2>School Email Only</h2>
          <p>Access is restricted to school domains like <code>@yourschool.edu</code>. Outsiders are locked out by default.</p>
        </section>

        {/* Schedule Viewer */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={ScheduleViewer} style={{height: '100%' }}/>
          </div>
          <h2>Schedule Viewer</h2>
          <p>Quickly view your daily schedule and find your next class — all in one place.</p>

        </section>

      </main>
      </div>
    </div>
  );
}

export default Demo;
