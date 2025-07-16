import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    setCurrentDate(today);
  }, []);

  return (
    <div className="container">
      <div className="header">
        <h1 className="title">PRIVACY POLICY</h1>
        <h2 className="subtitle">TAP PRECISION</h2>
        <p className="last-updated">Last Updated: <span>{currentDate}</span></p>
      </div>

      <div className="section">
        <h3 className="section-title">1. INFORMATION WE COLLECT</h3>
        <h4 className="subsection-title">1.1 Game Data</h4>
        <p className="bullet-point">• High scores and game progress (stored locally on device)</p>
        <p className="bullet-point">• Game statistics and performance data</p>
        <p className="bullet-point">• App usage analytics</p>

        <h4 className="subsection-title">1.2 Advertising Data</h4>
        <p className="bullet-point">• Device advertising identifier (for personalized ads)</p>
        <p className="bullet-point">• App interaction data for ad targeting</p>
        <p className="bullet-point">• Ad performance metrics</p>

        <h4 className="subsection-title">1.3 Technical Data</h4>
        <p className="bullet-point">• Device information (model, OS version)</p>
        <p className="bullet-point">• App crash reports and error logs</p>
        <p className="bullet-point">• Network connection status</p>
      </div>

      <div className="section">
        <h3 className="section-title">2. HOW WE USE YOUR INFORMATION</h3>
        <h4 className="subsection-title">2.1 Game Functionality</h4>
        <p className="bullet-point">• Save your game progress and high scores</p>
        <p className="bullet-point">• Provide personalized gaming experience</p>
        <p className="bullet-point">• Improve game performance and features</p>

        <h4 className="subsection-title">2.2 Advertising</h4>
        <p className="bullet-point">• Display relevant advertisements through Google AdMob</p>
        <p className="bullet-point">• Measure ad effectiveness and user engagement</p>
        <p className="bullet-point">• Provide rewarded video ads for extra lives</p>
      </div>

      <div className="section">
        <h3 className="section-title">3. DATA SHARING</h3>
        <h4 className="subsection-title">3.1 Third-Party Services</h4>
        <p className="section-text">We share data with:</p>
        <p className="bullet-point">• Google AdMob (for advertising services)</p>
        <p className="bullet-point">• Google Analytics (for app performance)</p>
        <p className="bullet-point">• Crash reporting services</p>

        <h4 className="subsection-title">3.2 Legal Requirements</h4>
        <p className="section-text">We may disclose information if required by law or legal process.</p>
      </div>

      <div className="section">
        <h3 className="section-title">4. DATA SECURITY</h3>
        <p className="section-text">We implement appropriate security measures to protect your data:</p>
        <p className="bullet-point">• Encryption of sensitive data</p>
        <p className="bullet-point">• Secure data transmission protocols</p>
        <p className="bullet-point">• Regular security assessments</p>
      </div>

      <div className="section">
        <h3 className="section-title">5. YOUR RIGHTS</h3>
        <p className="bullet-point">• Access your personal data</p>
        <p className="bullet-point">• Request data correction or deletion</p>
        <p className="bullet-point">• Opt-out of personalized advertising</p>
        <p className="bullet-point">• Contact us about privacy concerns</p>
      </div>

      <div className="section">
        <h3 className="section-title">6. CHILDREN'S PRIVACY</h3>
        <p className="section-text">
          This app is suitable for all ages. We do not knowingly collect personal information from children under 13 without parental consent.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">7. CHANGES TO PRIVACY POLICY</h3>
        <p className="section-text">
          We may update this policy periodically. Users will be notified of significant changes.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">8. CONTACT INFORMATION</h3>
        <p className="bullet-point">• Email: support@dheenadhayalan.online</p>
        <p className="bullet-point">• Address: 2/153, mettu street, mamandur, Tamil Nadu, India, 631201</p>
      </div>

      <div className="section">
        <h3 className="section-title">9. THIRD-PARTY PRIVACY POLICIES</h3>
        <p className="bullet-point">
          • <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google AdMob</a>
        </p>
        <p className="bullet-point">
          • <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Analytics</a>
        </p>
      </div>

      <div className="footer">
        <p className="footer-text">Thank you for trusting Tap Precision!</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
