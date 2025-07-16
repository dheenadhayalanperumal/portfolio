import React, { useEffect, useState } from "react";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setCurrentDate(today);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">TERMS AND CONDITIONS</h1>
        <h2 className="subtitle">TAP TIMING</h2>
        <p className="last-updated">Last Updated: <span>{currentDate}</span></p>
      </div>

      <div className="section">
        <h3 className="section-title">1. ACCEPTANCE OF TERMS</h3>
        <p className="section-text">
          By downloading, installing, or using the Tap Timing mobile application ("Game"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, do not use the Game.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">2. GAME DESCRIPTION</h3>
        <p className="section-text">
          Tap Timing is a precision-based arcade game where players test their timing skills by tapping a moving circle at the perfect moment to achieve high scores.
        </p>
        <h4 className="subsection-title">2.1 Game Features</h4>
        <p className="bullet-point">• Progressive difficulty levels</p>
        <p className="bullet-point">• Combo scoring system</p>
        <p className="bullet-point">• Lives system with 3 attempts</p>
        <p className="bullet-point">• High score tracking</p>
        <p className="bullet-point">• Optional rewarded video ads for extra lives</p>
      </div>

      {/* Continue all other sections here... exactly the same format */}

      <div className="section">
        <h3 className="section-title">16. ACKNOWLEDGMENT</h3>
        <p className="section-text">
          By using Tap Timing, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>

      <div className="footer">
        <p className="footer-text">
          Thank you for playing Tap Timing! Enjoy testing your timing skills.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
