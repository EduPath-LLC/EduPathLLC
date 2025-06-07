import React, { useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Demo.css';
import LocationLock from '../assets/LocationLock.jpg';
import ScheduleViewer from '../assets/ScheduleViewer.jpg';
import SchoolEmail from '../assets/SchoolEmail.jpg';
import Lock from '../assets/lock.png';
import VideoPlaceholder from '../assets/Video.mp4';

function Demo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    videoRef.current.play();
  };

  return (
    <div className="total">
      <Navbar />

      <div className='demoPage'>
      <header className="demoHeader">
        <h1>EduPath Demo</h1>
        <p>Navigate campus securely. Stay on top of your schedule.</p>
      </header>

      {/* Video Section - Fixed */}
      <section className="videoSection">
        <div 
          className="videoContainer" 
          onClick={!isPlaying ? handlePlay : null}
        >
          <video
            ref={videoRef}
            className="videoPlaceholder"
            poster="" // Add a poster image path here if available
            controls={isPlaying}
            preload="metadata"
          >
            <source src={VideoPlaceholder} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && <div className="playOverlay">▶</div>}
        </div>
        <div className="videoCaption">
          <h2>See EduPath in Action</h2>
          <p>Watch how students navigate campus securely and efficiently with our app</p>
        </div>
      </section>

      <main className="demoContent">
        {/* Email Verification */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={Lock} style={{height: '100%' }} alt="Email Verification" />
          </div>
          <h2>Email Verification</h2>
          <p>Only verified school emails are allowed. This ensures secure, student-only access to all features.</p>
        </section>

        {/* Location Lock */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
            <img src={LocationLock} alt="Location Lock Feature"/>
          </div>
          <h2>Location Lock</h2>
          <p>Map features only unlock when you're physically on campus. No spoofing, no remote access.</p>
        </section>

        {/* School Email Only */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={SchoolEmail} alt="School Email Restriction"/>
          </div>
          <h2>School Email Only</h2>
          <p>Access is restricted to school domains like <code>@yourschool.edu</code>. Outsiders are locked out by default.</p>
        </section>

        {/* Schedule Viewer */}
        <section className="demoCard">
          <div className="demoImagePlaceholder">
          <img src={ScheduleViewer} style={{height: '100%' }} alt="Schedule Viewer"/>
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