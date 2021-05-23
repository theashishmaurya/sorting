import React from "react";
import image from "../img/profile-photo.jpg";

const Aboutme = () => {
  return (
    <div>
      <div class='about-me container-fluid' id='About'>
        <h2 class='about-me-heading center '>ABOUT ME</h2>
        <div class='row' id='about-me'>
          <div class='col s12 m3 l3 xl5 center'>
            <img
              class='profile-image circle responsive-img'
              src={image}
              alt=''
            />
          </div>
          <div class='col s12 m8 l8 xl6 '>
            <p class='flow-text'>
              Hi, My name is Ashish Maurya. I'm a B.Tech Student at LNCTS
              indore,RGPV in Computer Science Department.
            </p>
            <p class='flow-text'>
              I program and develop web-apps. I usually prefer MERN stack but
              can work with different tech stack as needed.{" "}
            </p>
            <p class='flow-text'>
              I have an interest in music and reading books.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
