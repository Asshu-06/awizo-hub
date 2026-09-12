import { useEffect, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import '../../pages/services/ServiceDetail.css';

const ServiceFeaturesSection = ({ features, video, subtitle }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force video reload when video changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video]);

  return (
    <section className="section features-section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2>What We Offer</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>

        <div className="features-offer-layout">
          {video && (
            <div className="features-offer-video">
              <video ref={videoRef} autoPlay loop muted playsInline key={video}>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          )}

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeaturesSection;
