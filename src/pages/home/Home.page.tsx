import React from "react";
import "./home.scss";
const Home = () => {
  return (
    <div className="content home">
      <h1>Resume Management Software</h1>
      <p className="para">
        Resume management software helps recruiters save time so that they can
        shortlist, engage, and hire candidates more efficiently.  Recruit
        allows you to parse multiple resumes, format them to fit your brand, and
        transfer candidate information to your candidate or client database.
      </p>
      <div className="resume-video-sec">
        <div className="banner-video">
          <video src="../../../public/banner.mp4" autoPlay loop poster="//www.zohowebstatic.com/sites/zweb/images/recruit/banner-thumb.jpg"></video>
        </div>
      </div>
    </div>
  );
};

export default Home;
