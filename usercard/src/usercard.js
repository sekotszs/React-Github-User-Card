import React from "react";
import "./usercard.css";

function Usercard(props) {
 
    return (
      <div>
        <p>{props.user.login}</p>
        <img src={props.user.avatar_url}></img>
        <div>
          {props.followers.map((follower, index) => {
            return (
              <div key={index}>
                <p>{follower.login}</p>
                <img src={follower.avatar_url}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }


export default Usercard;
