import React from "react";

const DheefitPrivacyPolicy = () => {
  // You can easily update these variables
  const currentDate = new Date().toLocaleDateString();
  const supportEmail = "support@dheefit.com"; // Replace with actual email

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6", color: "#333" }}>
      <h1>Privacy Policy for Dheefit</h1>
      <p><strong>Last Updated: {currentDate}</strong></p>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Dheefit ("we," "our," or "us"). We are committed to protecting your privacy and ensuring 
        the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
        and safeguard your information when you use our mobile application Dheefit (the "App").
      </p>
      <p>
        By using our App, you agree to the collection and use of information in accordance with this Privacy Policy. 
        If you do not agree with our policies and practices, please do not use our App.
      </p>

      <h2>2. Information We Collect</h2>

      <h3>2.1 Personal Information</h3>
      <p>When you create an account and use our App, we collect the following personal information:</p>
      <ul>
        <li><strong>Account Information:</strong> Email address, name, phone number (optional).</li>
        <li>
          <strong>Profile Information:</strong>
          <ul>
            <li>Gender</li>
            <li>Date of birth</li>
            <li>Height (in cm)</li>
            <li>Weight (in kg)</li>
            <li>Activity level</li>
            <li>Profile photo (if uploaded)</li>
          </ul>
        </li>
        <li><strong>Authentication Data:</strong> Email and password (stored securely using Firebase Authentication).</li>
      </ul>

      <h3>2.2 Health and Fitness Data</h3>
      <p>To provide our fitness tracking services, we collect the following health and fitness information:</p>
      <ul>
        <li><strong>Step Data:</strong> Daily step count, distance traveled, walking speed, GPS location data (for step tracking).</li>
        <li>
          <strong>Nutrition Data:</strong>
          <ul>
            <li>Food entries and meal logs</li>
            <li>Calorie intake</li>
            <li>Macronutrient information (protein, carbohydrates, fats, fiber)</li>
            <li>Meal types (breakfast, lunch, dinner, snacks)</li>
          </ul>
        </li>
        <li><strong>Water Intake:</strong> Daily water consumption records.</li>
        <li><strong>Weight Data:</strong> Weight entries and weight history.</li>
        <li><strong>Workout Data:</strong> Exercise logs, workout types, duration.</li>
        <li><strong>Fitness Goals:</strong> Daily calorie goals, step goals, water intake goals, target weight, weight management goals.</li>
      </ul>

      <h3>2.3 Device and Usage Information</h3>
      <p>We automatically collect certain information about your device and how you interact with our App:</p>
      <ul>
        <li>Device information (model, operating system version).</li>
        <li>App usage data and analytics.</li>
        <li>Crash reports and error logs.</li>
        <li>IP address.</li>
        <li>Location data (when using GPS step tracking).</li>
      </ul>

      <h3>2.4 Health Connect and Google Fit Data</h3>
      <p>If you choose to connect your account with Google Health Connect or Google Fit:</p>
      <ul>
        <li>We may access and sync health data from these services.</li>
        <li>This includes step count, activity data, and other health metrics.</li>
        <li>You can disconnect these services at any time through the App settings.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use the collected information for the following purposes:</p>

      <h3>3.1 Core App Functionality</h3>
      <ul>
        <li><strong>Account Management:</strong> To create and manage your user account.</li>
        <li><strong>Fitness Tracking:</strong> To track and display your daily fitness metrics (steps, calories, water intake, weight).</li>
        <li><strong>Personalization:</strong> To provide personalized calorie recommendations, meal suggestions, and fitness goals based on your profile.</li>
        <li><strong>AI Meal Recommendations:</strong> To generate personalized meal suggestions using AI technology (Google Gemini).</li>
      </ul>

      <h3>3.2 Service Improvement</h3>
      <ul>
        <li><strong>Analytics:</strong> To understand how users interact with our App and improve user experience.</li>
        <li><strong>Error Monitoring:</strong> To identify and fix bugs, crashes, and technical issues.</li>
        <li><strong>Performance Optimization:</strong> To optimize App performance and functionality.</li>
      </ul>

      <h3>3.3 Communication</h3>
      <ul>
        <li><strong>Notifications:</strong> To send you reminders for water intake, meal logging, and other fitness-related notifications (with your consent).</li>
        <li><strong>Support:</strong> To respond to your inquiries and provide customer support.</li>
      </ul>

      <h2>4. How We Store Your Information</h2>
      <h3>4.1 Data Storage</h3>
      <p>Your data is stored securely using:</p>
      <ul>
        <li><strong>Firebase Firestore:</strong> Cloud database service provided by Google for storing your account information, fitness data, and health records.</li>
        <li><strong>Firebase Authentication:</strong> Secure authentication service for managing user accounts.</li>
        <li><strong>Local Storage:</strong> Some data may be cached locally on your device for offline access.</li>
      </ul>

      <h3>4.2 Data Security</h3>
      <p>We implement appropriate technical and organizational security measures to protect your personal information:</p>
      <ul>
        <li>Encryption (Data is encrypted in transit and at rest).</li>
        <li>Secure authentication using Firebase Authentication.</li>
        <li>Limited access to personal data to authorized personnel only.</li>
        <li>Regular security updates.</li>
      </ul>
      <p>
        However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive 
        to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>We use the following third-party services that may collect, process, or store your information:</p>
      <ul>
        <li>
          <strong>Google Services (Firebase, Health Connect, Fit, Gemini AI):</strong>
          <br />
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">Firebase Privacy Policy</a> | 
          <a href="https://support.google.com/healthconnect/answer/13128574" target="_blank" rel="noopener noreferrer"> Health Connect Policy</a>
        </li>
        <li>
          <strong>Expo Services:</strong> For app development, deployment, and analytics.
          <br />
          <a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">Expo Privacy Policy</a>
        </li>
      </ul>

      <h2>6. Data Sharing and Disclosure</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information only 
        in the following circumstances:
      </p>
      <ul>
        <li><strong>Service Providers:</strong> Cloud hosting, analytics, and AI services.</li>
        <li><strong>Legal Requirements:</strong> If required by law or to respond to valid requests by public authorities.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</li>
        <li><strong>With Your Consent:</strong> With your explicit consent or at your direction.</li>
      </ul>

      <h2>7. Your Rights and Choices</h2>
      <ul>
        <li><strong>Access and Correction:</strong> You can view and update your profile and fitness data within the App.</li>
        <li><strong>Data Deletion:</strong> You can request deletion of your account or delete specific entries (food logs, etc.) through the App.</li>
        <li><strong>Permissions:</strong> You can grant or revoke Location, Health Connect, and Notification permissions in settings.</li>
        <li><strong>Data Export:</strong> You can request a copy of your data by contacting us.</li>
      </ul>

      <h2>8. Children's Privacy</h2>
      <p>
        Our App is not intended for children under the age of 13. We do not knowingly collect personal information 
        from children under 13. If we become aware that we have collected personal information from a child under 13, 
        we will take steps to delete such information.
      </p>

      <h2>9. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as needed to provide you with 
        our services. If you delete your account, we will delete or anonymize your personal information, except 
        where we are required to retain it for legal or regulatory purposes.
      </p>

      <h2>10. International Data Transfers</h2>
      <p>
        Your information may be transferred to and processed in countries other than your country of residence. 
        By using our App, you consent to the transfer of your information to these countries.
      </p>

      <h2>11. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
        Privacy Policy in the App or sending a notification for significant changes. Your continued use of the App 
        constitutes acceptance of the updated policy.
      </p>

      <h2>12. California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, you have the right to know what personal information is collected, request deletion, 
        opt-out of sales (we do not sell info), and non-discrimination for exercising these rights.
      </p>

      <h2>13. GDPR Rights (European Users)</h2>
      <p>
        If you are located in the EEA, you have rights regarding access, rectification, erasure, restriction of processing, 
        data portability, and the right to object or withdraw consent.
      </p>

      <h2>14. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please 
        contact us at:
      </p>
      <p>
        <strong>Email:</strong> {supportEmail}<br />
        <strong>Developer:</strong> dheena007<br />
        <strong>App Name:</strong> Dheefit
      </p>

      <h2>15. Consent</h2>
      <p><strong>By using Dheefit, you consent to our Privacy Policy and agree to its terms.</strong></p>
    </div>
  );
};

export default DheefitPrivacyPolicy;