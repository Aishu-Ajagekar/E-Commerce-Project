import React from 'react';
import Layout from '../components/Layout/Layout';

const Policy = () => {
    return (
        <>
            <Layout>
            <div className="container py-">
      <div className="row align-items-center">
        {/* Left Side: Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/policy.jpg"
            alt="Privacy Policy"
            className="img-fluid rounded"
          />
        </div>

        {/* Right Side: Privacy Policy Content */}
        <div className="col-md-6">
          <h2 className="mb-4">Privacy Policy</h2>
          <p className="text-muted">
            Your privacy is important to us. This Privacy Policy outlines how
            we collect, use, and protect your personal information.
          </p>
          <ul className="text-muted">
            <li className="mb-3">
              <strong>Information Collection:</strong> We collect information
              you provide directly to us, such as when you create an account or
              contact us.
            </li>
            <li className="mb-3">
              <strong>Usage Data:</strong> We may collect data on how our
              services are accessed and used to improve your experience.
            </li>
            <li className="mb-3">
              <strong>Data Protection:</strong> We implement security measures
              to protect your data from unauthorized access.
            </li>
            <li className="mb-3">
              <strong>Third-Party Sharing:</strong> We do not share your
              personal information with third parties without your consent,
              except as required by law.
            </li>
            <li className="mb-3">
              <strong>Policy Updates:</strong> We may update this policy from
              time to time. Please review it periodically.
            </li>
          </ul>
          <button className="btn mt-3" style={{ backgroundColor: "#D268CC", color: "white" }}>Learn More</button>
        </div>
      </div>
    </div>
            </Layout>
        </>
    );
}

export default Policy;
