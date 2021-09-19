import React from "react";
import user from "../data/user";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>Put the bio in here</p> */}
      {/* {!props.bio || props.bio = '' ? null : <p>props.bio</p>} */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.linkedin} github={props.github} />
    </div>
  );
}

export default About;
