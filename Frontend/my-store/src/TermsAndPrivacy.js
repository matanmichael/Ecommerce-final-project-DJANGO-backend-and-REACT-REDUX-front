import React from "react";
import { Link } from "react-router-dom";
import './Privacy.css';
const TermsAndPrivacy = () => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <h3>
        REAL MADRID C.F. (also REAL MADRID or "the Club"), provides you with the
        <br></br>present information concerning the processing of your personal
        data in order
        <br></br> that you have detailed knowledge about:
      </h3>
      <ul className="Privacy-center">
        <li>Why we need to process your data.</li>
        <li>What data of yours we may have and for how long.</li>
        <li>With whom we share the data.</li>
        <li>
          What your rights are in this respect and how you can exercise them.
        </li>
      </ul>
      <p>
        REAL MADRID processes different individual's personal data in order to
        carry out various activities. <br></br>Therefore, your personal data can
        be used in different ways and shared with different recipients <br></br>
        depending on each of the specific purposes for which we need the data.
        Below, we provide detailed<br></br> information on each of these data
        processing. We do not carry out individuals decisions<br></br> making
        nor profiling that may seriously affect you, and we do not use your
        personal<br></br> data for further purposes other than those reflected
        in this document.
      </p>

      <p>
        <Link to="/register">go back to registration</Link>
      </p>
    </div>
  );
};

export default TermsAndPrivacy;
