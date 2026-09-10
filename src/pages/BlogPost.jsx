import { useParams } from 'react-router-dom';
import { FaClock, FaUser, FaCalendar } from 'react-icons/fa';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();

  // Blog post data - in production, fetch from Supabase based on slug
  const blogPosts = {
    'digital-marketing-trends-2024': {
      title: '10 Digital Marketing Trends to Watch in 2024',
      author: 'Awizo Team',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Digital Marketing',
      video: '/digitalmarketing.mp4',
      content: `
        <p>The digital marketing landscape is constantly evolving, and staying ahead of the curve is crucial for business success. In 2024, we're seeing transformative trends that are reshaping how brands connect with their audiences. Here are the top 10 trends you need to know.</p>
        
        <h2>1. AI-Powered Marketing Automation</h2>
        <p>Artificial intelligence is revolutionizing how businesses approach marketing. From chatbots providing 24/7 customer service to AI-driven content creation and personalized email campaigns, automation is making marketing more efficient and effective than ever before.</p>
        
        <h2>2. Video Content Dominance</h2>
        <p>Video continues to be the most engaging form of content across all platforms. Short-form videos on TikTok, Instagram Reels, and YouTube Shorts are capturing audience attention, while live streaming creates authentic connections with viewers.</p>
        
        <h2>3. Personalization at Scale</h2>
        <p>Today's consumers expect personalized experiences. Advanced data analytics and machine learning enable businesses to deliver tailored content, product recommendations, and messaging to individual users based on their behavior and preferences.</p>
        
        <h2>4. Voice Search Optimization</h2>
        <p>With the rise of smart speakers and voice assistants, optimizing for voice search is becoming essential. Conversational keywords and natural language processing are key to capturing voice search traffic.</p>
        
        <h2>5. Interactive Content</h2>
        <p>Quizzes, polls, calculators, and augmented reality experiences are engaging audiences in new ways. Interactive content not only captures attention but also provides valuable data about customer preferences.</p>
        
        <h2>6. Influencer Marketing Evolution</h2>
        <p>Micro and nano-influencers are proving more effective than mega-influencers for many brands. Authentic partnerships with niche content creators drive higher engagement and trust.</p>
        
        <h2>7. Privacy-First Marketing</h2>
        <p>With increasing privacy regulations and the phase-out of third-party cookies, marketers must adapt to first-party data strategies and build direct relationships with customers.</p>
        
        <h2>8. Social Commerce</h2>
        <p>Shopping directly within social media platforms is streamlining the customer journey. Instagram Shopping, Facebook Marketplace, and TikTok Shop are making it easier than ever to convert social engagement into sales.</p>
        
        <h2>9. Sustainability Messaging</h2>
        <p>Consumers increasingly support brands that demonstrate environmental and social responsibility. Authentic sustainability messaging resonates with conscious consumers and builds brand loyalty.</p>
        
        <h2>10. Community Building</h2>
        <p>Building engaged communities around your brand creates lasting relationships. Private groups, exclusive content, and member-only benefits foster loyalty and turn customers into brand advocates.</p>
        
        <p><strong>Ready to implement these trends in your marketing strategy?</strong> Contact Awizo Hub today and let our experts help you stay ahead of the competition!</p>
      `
    },
    'it-career-guide': {
      title: 'Complete Guide to Starting Your IT Career',
      author: 'Awizo Team',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Career',
      video: '/career.mp4',
      content: `
        <p>Breaking into the IT industry can seem daunting, but with the right guidance and preparation, you can launch a successful career in technology. This comprehensive guide will walk you through everything you need to know to start your IT journey.</p>
        
        <h2>1. Understanding the IT Landscape</h2>
        <p>The IT industry offers diverse career paths including software development, cybersecurity, data science, cloud computing, network administration, and more. Research different roles to find what aligns with your interests and strengths.</p>
        
        <h2>2. Education and Certifications</h2>
        <p>While a computer science degree is valuable, it's not always necessary. Consider these options:</p>
        <ul>
          <li><strong>Formal Education:</strong> Bachelor's or Master's degree in Computer Science, IT, or related fields</li>
          <li><strong>Bootcamps:</strong> Intensive coding bootcamps for rapid skill development (3-6 months)</li>
          <li><strong>Certifications:</strong> CompTIA A+, Network+, Security+, AWS, Azure, Google Cloud certifications</li>
          <li><strong>Self-Learning:</strong> Online platforms like Coursera, Udemy, and freeCodeCamp</li>
        </ul>
        
        <h2>3. Essential Technical Skills</h2>
        <p>Focus on building these fundamental skills:</p>
        <ul>
          <li>Programming languages (Python, JavaScript, Java, C++)</li>
          <li>Database management (SQL, NoSQL)</li>
          <li>Version control (Git, GitHub)</li>
          <li>Cloud platforms (AWS, Azure, Google Cloud)</li>
          <li>Operating systems (Linux, Windows Server)</li>
          <li>Networking fundamentals</li>
        </ul>
        
        <h2>4. Soft Skills Matter</h2>
        <p>Technical skills alone aren't enough. Develop these crucial soft skills:</p>
        <ul>
          <li>Problem-solving and analytical thinking</li>
          <li>Communication and teamwork</li>
          <li>Continuous learning mindset</li>
          <li>Time management</li>
          <li>Attention to detail</li>
        </ul>
        
        <h2>5. Build Your Portfolio</h2>
        <p>Create a portfolio that showcases your skills:</p>
        <ul>
          <li>Develop personal projects and upload to GitHub</li>
          <li>Contribute to open-source projects</li>
          <li>Create a professional website</li>
          <li>Document your learning journey through blogs</li>
        </ul>
        
        <h2>6. Gaining Experience</h2>
        <p>Start building experience even before your first job:</p>
        <ul>
          <li>Internships (paid or unpaid)</li>
          <li>Freelance projects</li>
          <li>Volunteer work for nonprofits</li>
          <li>Hackathons and coding competitions</li>
        </ul>
        
        <h2>7. Networking is Key</h2>
        <p>Build connections in the IT community:</p>
        <ul>
          <li>Attend tech meetups and conferences</li>
          <li>Join LinkedIn and connect with professionals</li>
          <li>Participate in online communities (Reddit, Stack Overflow, Discord)</li>
          <li>Find a mentor in your desired field</li>
        </ul>
        
        <h2>8. Job Search Strategies</h2>
        <p>Prepare for your job search:</p>
        <ul>
          <li>Optimize your resume for Applicant Tracking Systems (ATS)</li>
          <li>Customize your resume for each application</li>
          <li>Practice coding interviews on LeetCode, HackerRank</li>
          <li>Prepare for behavioral interviews</li>
          <li>Research companies and their tech stacks</li>
        </ul>
        
        <h2>9. Entry-Level Positions</h2>
        <p>Consider these entry points:</p>
        <ul>
          <li>Junior Developer</li>
          <li>IT Support Specialist</li>
          <li>QA Tester</li>
          <li>Help Desk Technician</li>
          <li>Junior Data Analyst</li>
        </ul>
        
        <h2>10. Continuous Learning</h2>
        <p>Technology evolves rapidly. Commit to lifelong learning through online courses, certifications, and staying updated with industry trends. Follow tech blogs, podcasts, and thought leaders in your field.</p>
        
        <p><strong>Ready to launch your IT career?</strong> Awizo Hub offers personalized career guidance and placement assistance to help you land your dream tech job. Contact us today!</p>
      `
    },
    'study-abroad-tips': {
      title: 'Top 5 Tips for Studying Abroad Successfully',
      author: 'Awizo Team',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Education',
      video: '/abroad education.mp4',
      content: `
        <p>Studying abroad is an exciting opportunity that can transform your academic and personal life. However, making the most of this experience requires preparation and the right mindset. Here are five essential tips to ensure your international education journey is successful and rewarding.</p>
        
        <h2>1. Research and Choose the Right Program</h2>
        <p>The foundation of a successful study abroad experience starts with choosing the right program and destination.</p>
        
        <h3>Consider These Factors:</h3>
        <ul>
          <li><strong>Academic Goals:</strong> Ensure the program aligns with your major and career aspirations</li>
          <li><strong>Language Requirements:</strong> Assess language proficiency needed and available support</li>
          <li><strong>Cost of Living:</strong> Research tuition fees, accommodation, and daily expenses</li>
          <li><strong>Cultural Fit:</strong> Consider the country's culture, climate, and lifestyle</li>
          <li><strong>Safety:</strong> Check travel advisories and campus security</li>
          <li><strong>Career Opportunities:</strong> Look for programs with internship and job placement support</li>
        </ul>
        
        <h2>2. Plan Your Finances Strategically</h2>
        <p>Studying abroad is a significant financial investment. Proper financial planning ensures you can focus on your studies without constant money worries.</p>
        
        <h3>Financial Planning Tips:</h3>
        <ul>
          <li><strong>Scholarships and Grants:</strong> Apply for multiple scholarships early (Fulbright, Erasmus+, country-specific awards)</li>
          <li><strong>Education Loans:</strong> Explore student loan options with favorable interest rates</li>
          <li><strong>Budget Creation:</strong> Create a detailed monthly budget including tuition, rent, food, transport, and entertainment</li>
          <li><strong>Part-Time Work:</strong> Research student work permit regulations in your destination country</li>
          <li><strong>Banking:</strong> Open an international student bank account with low fees</li>
          <li><strong>Emergency Fund:</strong> Keep 3-6 months of expenses as emergency savings</li>
        </ul>
        
        <h2>3. Prepare for Cultural Adjustment</h2>
        <p>Culture shock is real, but you can minimize its impact with proper preparation.</p>
        
        <h3>Cultural Preparation Steps:</h3>
        <ul>
          <li><strong>Learn the Language:</strong> Even basic phrases help immensely in daily interactions</li>
          <li><strong>Understand Local Customs:</strong> Research social norms, etiquette, and taboos</li>
          <li><strong>Connect with Current Students:</strong> Join online communities of students from your destination</li>
          <li><strong>Stay Open-Minded:</strong> Embrace differences rather than judging them</li>
          <li><strong>Build a Support Network:</strong> Join international student organizations and clubs</li>
          <li><strong>Stay Connected Home:</strong> Schedule regular calls with family while building new friendships</li>
        </ul>
        
        <h2>4. Master Time Management and Study Skills</h2>
        <p>Academic systems abroad may differ significantly from what you're used to. Adapting quickly is crucial for success.</p>
        
        <h3>Academic Success Strategies:</h3>
        <ul>
          <li><strong>Understand Grading Systems:</strong> Learn how assessments and grading work in your new institution</li>
          <li><strong>Active Participation:</strong> Class participation often counts toward grades abroad</li>
          <li><strong>Office Hours:</strong> Utilize professor office hours for clarification and networking</li>
          <li><strong>Study Groups:</strong> Form study groups with local and international students</li>
          <li><strong>Academic Resources:</strong> Use writing centers, tutoring services, and libraries</li>
          <li><strong>Balance:</strong> Maintain a healthy balance between academics, social life, and personal time</li>
        </ul>
        
        <h2>5. Take Care of Your Health and Well-being</h2>
        <p>Physical and mental health are crucial for academic success and overall enjoyment of your experience abroad.</p>
        
        <h3>Health and Wellness Tips:</h3>
        <ul>
          <li><strong>Health Insurance:</strong> Ensure comprehensive international health insurance coverage</li>
          <li><strong>Mental Health:</strong> Know where to access counseling and mental health services</li>
          <li><strong>Regular Exercise:</strong> Join sports clubs or gym facilities on campus</li>
          <li><strong>Healthy Eating:</strong> Learn to cook local dishes and maintain a balanced diet</li>
          <li><strong>Sleep Schedule:</strong> Maintain consistent sleep patterns despite social activities</li>
          <li><strong>Stress Management:</strong> Practice meditation, yoga, or other stress-relief techniques</li>
        </ul>
        
        <h3>Additional Success Tips:</h3>
        <ul>
          <li><strong>Document Your Journey:</strong> Keep a journal, blog, or photo diary</li>
          <li><strong>Travel Wisely:</strong> Explore your host country and neighboring regions during breaks</li>
          <li><strong>Professional Development:</strong> Attend career fairs, workshops, and networking events</li>
          <li><strong>Stay Safe:</strong> Register with your country's embassy and stay aware of your surroundings</li>
        </ul>
        
        <p><strong>Ready to embark on your study abroad journey?</strong> Awizo Hub provides comprehensive abroad education guidance, from university selection to visa assistance. Let us help you make your international education dreams a reality. Contact us today for a free consultation!</p>
      `
    }
  };

  // Get the post data based on slug, or use the first post as default
  const post = blogPosts[slug] || blogPosts['digital-marketing-trends-2024'];

  return (
    <div className="blog-post-page">
      <article className="blog-post">
        <div className="post-header">
          <div className="container">
            <span className="post-category">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <span className="meta-item"><FaUser /> {post.author}</span>
              <span className="meta-item"><FaCalendar /> {new Date(post.date).toLocaleDateString()}</span>
              <span className="meta-item"><FaClock /> {post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="post-image">
          {post.video && (
            <video 
              src={post.video}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
        </div>

        <div className="post-content">
          <div className="container">
            <div className="content-wrapper">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
