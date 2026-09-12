import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Services.css';
import './Home.css'; // Import Home styles for topic cards

const DigitalMarketingLanding = () => {
  const digitalMarketingServices = [
    {
      title: 'Social Media Marketing',
      description: 'Build and engage your audience across all social platforms',
      videoSrc: '/social.mp4',
      link: '/digital-marketing/social-media'
    },
    {
      title: 'Meta & Facebook Ads',
      description: 'Reach your target audience with precision-targeted ad campaigns',
      videoSrc: '/metaads.mp4',
      link: '/digital-marketing/meta-ads'
    },
    {
      title: 'Email Marketing',
      description: 'Build customer relationships with targeted email campaigns',
      videoSrc: '/emailmarketing.mp4',
      link: '/digital-marketing/email'
    },
    {
      title: 'Video Marketing',
      description: 'Engage audiences with compelling video content strategies',
      videoSrc: '/videomarketing.mp4',
      link: '/digital-marketing/video'
    },
    {
      title: 'Local SEO',
      description: 'Dominate local search results and attract nearby customers',
      videoSrc: '/localseo.mp4',
      link: '/digital-marketing/local-seo'
    },
    {
      title: 'Google Ads Management',
      description: 'Drive targeted traffic with expertly managed Google Ads campaigns',
      videoSrc: '/google.mp4',
      link: '/digital-marketing/google-ads'
    },
    {
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and converts customers',
      videoSrc: '/content.mp4',
      link: '/digital-marketing/content'
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Connect with customers through personalized WhatsApp campaigns',
      videoSrc: '/what.mp4',
      link: '/digital-marketing/whatsapp'
    },
    {
      title: 'Influencer Marketing',
      description: 'Amplify your brand message with relevant influencers',
      videoSrc: '/influence.mp4',
      link: '/digital-marketing/influencer'
    },
    {
      title: 'E-Commerce Marketing',
      description: 'Drive sales with comprehensive e-commerce marketing strategies',
      videoSrc: '/ecommerce.mp4',
      link: '/digital-marketing/ecommerce'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Digital Marketing</h1>
          <p className="page-subtitle">
            Data-driven digital marketing strategies that deliver measurable results
          </p>
        </div>
      </section>

      {/* Digital Marketing Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="topics-grid">
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="topic-card">
                <div className="topic-video">
                  <video autoPlay loop muted playsInline>
                    <source src={service.videoSrc} type="video/mp4" />
                  </video>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to={service.link} className="topic-link">
                  Learn More <FaArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-approach-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Our Digital Marketing Approach</h2>
            <p className="section-subtitle">
              We combine data-driven strategies with creative excellence to deliver campaigns that perform
            </p>
          </div>
          <div className="services-approach-grid">
            <div className="services-approach-card">
              <h3>Strategy & Planning</h3>
              <p>
                We start by understanding your business goals, target audience, and competitive landscape to create a tailored digital marketing strategy.
              </p>
            </div>
            <div className="services-approach-card">
              <h3>Execution & Optimization</h3>
              <p>
                Our team implements campaigns across channels, continuously testing and optimizing for maximum performance and ROI.
              </p>
            </div>
            <div className="services-approach-card">
              <h3>Reporting & Growth</h3>
              <p>
                Track your success with transparent reporting and actionable insights that drive continuous improvement and business growth.
              </p>
            </div>
          </div>
          <ul className="services-approach-list">
            <li><FaCheckCircle /> Data-driven decision making</li>
            <li><FaCheckCircle /> Multi-channel campaign management</li>
            <li><FaCheckCircle /> Transparent performance tracking</li>
            <li><FaCheckCircle /> ROI-focused strategies</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Ready to Grow Your Business Online?</h2>
            <p>
              Get in touch with our digital marketing experts for a free consultation and custom strategy
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingLanding;
