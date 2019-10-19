import React from 'react';
import darkProfilePic from '../assets/profile-pic-dark.png';
import lightProfilePic from '../assets/profile-pic-light.png';
import { rhythm } from '../utils/typography';

const Bio = ({ theme }) => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: rhythm(2),
      }}
    >
      {theme === 'dark' ? (
        <img
          src={darkProfilePic}
          alt={`Sandeep Singh`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
      ) : (
        <img
          src={lightProfilePic}
          alt={`Sandeep Singh`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
      )}
      <p style={{ maxWidth: 310, marginTop: 12 }}>
        Personal blog by Sandeep Singh
      </p>
    </div>
  );
};

export default Bio;
