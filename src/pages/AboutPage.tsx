import { PageHeader } from "../components/";
import "../styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <PageHeader
        title="About Me"
        subtitle="Learn more about the developer behind this application"
      />
      <div className="image-container">
        <div className="image-wrapper">
          <img
            src="/src/assets/profile.jpeg"
            alt="Developer"
            className="profile-image"
          />
        </div>
      </div>
      <div className="button-container">
        <a
          href="https://www.linkedin.com/in/juan-aristiz%C3%A1bal-031725229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button flex-center">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </a>

        <a
          href="https://github.com/Aristox173"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="button flex-center">
            <i className="fab fa-github"></i>
          </button>
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
