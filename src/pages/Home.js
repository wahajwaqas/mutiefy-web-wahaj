import React from "react";
import "./Home.css";
import fullLogo from '../images/FullLogo.png'
import mountain from '../images/mount.png'
import person from '../images/person.png'
export default function Home() {
  return (
    <section className="container">
      <header className="header">
        <img src={fullLogo}/>
        <button className="cta-button main" style={{color:'black'}}>Get Started for Free</button>
      </header>

      <div className="content">
          <div className="text-content">
            <h1>
              Watch Videos Without  <br /> Shackles Of Music, Mute  <br /> Music in{" "}
              <span className="highlight">Real-Time</span>
            </h1>

            <p className="subtext">
              Real-time muting of instrumental music in videos,
              <br />
              ensuring a halal and enriching experience.
            </p>
          </div>
      </div>

      <div className="contentImages">
        <div className="personParent">
              <img src={person} loading="lazy"/>
          </div>
        <div className="mountParent">
            <img src={mountain} loading="lazy"/>
        </div>
        
      </div>

      
      <div className="bottomItem">
        <button className="cta-button main" style={{color:'black'}}>Get Started for Free</button>
      </div>
    </section>
  );
}
