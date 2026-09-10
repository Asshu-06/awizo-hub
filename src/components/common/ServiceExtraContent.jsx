import { FaCheckCircle } from 'react-icons/fa';
import '../../pages/services/ServiceDetail.css';

const ServiceExtraContent = ({
  solutionsTitle = 'What We Deliver',
  solutionsSubtitle,
  solutions = [],
  processTitle = 'How We Work',
  processSubtitle,
  processSteps = [],
  includedTitle = 'What’s Included',
  includedText,
  includedText2,
  extras = [],
}) => {
  if (!solutions.length && !processSteps.length && !extras.length) {
    return null;
  }

  return (
    <>
      {solutions.length > 0 && (
        <section className="section service-extra-section">
          <div className="container">
            <div className="section-header text-center">
              <h2>{solutionsTitle}</h2>
              {solutionsSubtitle && <p className="section-subtitle">{solutionsSubtitle}</p>}
            </div>
            <div className="service-extra-grid">
              {solutions.map((item) => (
                <div key={item.title} className="service-extra-card">
                  {item.icon && (
                    <div className="service-extra-icon">
                      <item.icon />
                    </div>
                  )}
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {processSteps.length > 0 && (
        <section className="section service-process-section bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2>{processTitle}</h2>
              {processSubtitle && <p className="section-subtitle">{processSubtitle}</p>}
            </div>
            <div className="service-process-grid">
              {processSteps.map((item) => (
                <div key={item.step} className="service-process-card">
                  <span className="service-process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(extras.length > 0 || includedText) && (
        <section className="section service-extra-section">
          <div className="container">
            <div className="row service-included-row">
              <div className="col-12 col-md-6">
                <h2>{includedTitle}</h2>
                {includedText && <p>{includedText}</p>}
                {includedText2 && <p>{includedText2}</p>}
              </div>
              {extras.length > 0 && (
                <div className="col-12 col-md-6">
                  <ul className="service-included-list">
                    {extras.map((item) => (
                      <li key={item}>
                        <FaCheckCircle />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ServiceExtraContent;
