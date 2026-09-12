import { useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import ServiceFeaturesSection from './ServiceFeaturesSection';
import ServiceExtraContent from './ServiceExtraContent';
import { additionalPageExtras } from '../../data/serviceExtraContent';
import '../../pages/services/ServiceDetail.css';

const ServiceDetailLayout = ({
  title,
  subtitle,
  overviewTitle,
  overviewText,
  video,
  features,
  ctaTitle,
  ctaText,
  formService,
  path,
}) => {
  const extraContent = additionalPageExtras[path];
  const videoRef = useRef(null);

  useEffect(() => {
    // Force video reload when path/video changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video, path]);

  return (
    <div className="service-detail-page">
      <section className="service-hero">
        <div className="service-hero-overlay"></div>
        <div className="container">
          <div className="service-hero-content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="section service-overview">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>{overviewTitle}</h2>
              <p>{overviewText}</p>
            </div>
            <div className="col-12 col-md-6">
              <div className="service-image">
                <video ref={videoRef} autoPlay loop muted playsInline key={video}>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceFeaturesSection features={features} video={video} />

      {extraContent && <ServiceExtraContent {...extraContent} />}

      <section className="section service-cta-section">
        <div className="container">
          <div className="service-cta-grid">
            <div className="service-cta-content">
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
            </div>
            <div className="service-form">
              <ContactForm formTitle="Get Started" defaultService={formService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailLayout;
