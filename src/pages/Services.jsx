import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './Services.css';
import './Home.css'; // Import Home styles for topic cards

const Services = () => {
  const services = [
    {
      title: 'Web Design & Development',
      description: 'Custom websites with modern design and optimized performance',
      videoSrc: '/websitedev.mp4',
      link: '/services/web-design'
    },
    {
      title: 'SEO & Performance Marketing',
      description: 'Improve organic search rankings and drive quality traffic',
      videoSrc: '/sep.mp4',
      link: '/services/seo-marketing'
    },
    {
      title: 'Cloud Hosting & Infrastructure',
      description: 'Scalable cloud solutions for your business needs',
      videoSrc: '/cloudhosting.mp4',
      link: '/services/cloud-hosting'
    },
    {
      title: 'CRM & Automation',
      description: 'Streamline your business processes with smart automation',
      videoSrc: '/crm.mp4',
      link: '/services/crm-automation'
    },
    {
      title: 'Digital Strategy & Growth',
      description: 'Strategic planning for sustainable business growth',
      videoSrc: '/digitalmarketing.mp4',
      link: '/services/digital-strategy'
    },
    {
      title: 'AI Lead Generation',
      description: 'Leverage AI to generate and qualify high-quality leads',
      videoSrc: '/aileads.mp4',
      link: '/services/ai-lead-generation'
    },
    {
      title: 'Video Editing & Production',
      description: 'Professional video content for social media and marketing',
      videoSrc: '/Videoediting.mp4',
      link: '/services/video-editing'
    },
    {
      title: 'Payment Gateway Integration',
      description: 'Secure payment processing for your online business',
      videoSrc: '/payment.mp4',
      link: '/services/payment-gateway'
    },
    {
      title: 'Online Education',
      description: 'Access quality online education programs with expert guidance',
      videoSrc: '/online.mp4',
      link: '/services/online-education'
    },
    {
      title: 'Study Abroad',
      description: 'Turn your study abroad dreams into reality with expert counseling',
      videoSrc: '/abroad education.mp4',
      link: '/services/abroad-education'
    },
    {
      title: 'IT Placement Assistance',
      description: 'Launch your IT career with comprehensive placement support',
      videoSrc: '/job.mp4',
      link: '/services/it-placement'
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive Solutions Tailored to Your Success
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="topics-grid">
            {services.map((service, index) => (
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
            <h2>How We Support You</h2>
            <p className="section-subtitle">
              Every service keeps your current goals in place and adds the guidance, execution, and reporting you need to move forward.
            </p>
          </div>
          <div className="services-approach-grid">
            <div className="services-approach-card">
              <h3>Understand first</h3>
              <p>
                We start with your audience, timeline, and what is already working. Nothing is stripped out just to start over.
              </p>
            </div>
            <div className="services-approach-card">
              <h3>Plan with clarity</h3>
              <p>
                You get a practical path for marketing, careers, or education—what happens first, what can wait, and how success will be measured.
              </p>
            </div>
            <div className="services-approach-card">
              <h3>Execute and report</h3>
              <p>
                Campaigns, applications, or placement prep are handled with regular updates so you always know the next step.
              </p>
            </div>
          </div>
          <ul className="services-approach-list">
            <li><FaCheckCircle /> Dedicated point of contact for each engagement</li>
            <li><FaCheckCircle /> Transparent timelines and progress updates</li>
            <li><FaCheckCircle /> Advice tailored to your budget and stage</li>
            <li><FaCheckCircle /> Free consultation before you commit</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Get in touch with our team for a free consultation and let us help you find the perfect solution
            </p>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
