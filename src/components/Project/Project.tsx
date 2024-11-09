import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/7roubb/StundentModel" target="_blank" rel="noreferrer">
                  <img src={githubIcon} color="#FFFFFF" alt="Visit site" /></a>
                <a href="http://52.47.75.163" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Student Model</h3>
              <p> Student Model is a web application designed for an educational
                environment. Students can create new accounts and register for
                courses. Administrators have the ability to create new courses with
                specific details. Students can register for these courses provided
                there are no prerequisites or scheduling conflicts.
                <br/>
                Admin Username : osamahroub
                <br/>
                Password : osama123
                </p>
            </div>
            <footer> <ul className="tech-list"> <li>AWS EC2</li> <li>Django</li> <li>MySQL</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/7roubb/clue-master-spring-boot" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>Clue Master Game</h3>
              <p>
              Clue Master is a multiplayer mystery game built with Spring Boot, utilizing PostgreSQL for persistent storage, Redis for efficient caching, and the ChatGPT API to dynamically generate crime scenarios. This project combines the excitement of detective work with real-time gameplay, where players analyze clues to solve each unique mystery.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
                <li>ChatGPT</li>
                <li>AWS EC2</li>


              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/7roubb/ESP32-Alert" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/7roubb/ESP32-Alert" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ESP32 Temperature and Humidity Monitoring System</h3>
              <p>
              This project connects an ESP32 microcontroller to a temperature and humidity sensor (DHT11), publishes sensor readings to a CloudAMQP MQTT broker, and stores the data in InfluxDB. Additionally, the system integrates with Blynk for real-time monitoring and alerting.              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>RabbitMQ</li>
                <li>Blynk</li>
                <li>InfluxDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.datacamp.com/datalab/w/f7cd035d-78ab-4cdd-8d8c-702b93bd2d8d" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://www.datacamp.com/datalab/w/f7cd035d-78ab-4cdd-8d8c-702b93bd2d8d" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dinosaur and Films Dataset Analysis</h3>
              <p>
              Conducted an analysis on dinosaur fossil records using Python and pandas as part of DataCamp’s "Everyone Can Learn Data" Scholarship challenge. Worked with Paleobiology Database records to extract unique insights, including identifying 1,042 distinct dinosaur names. Gained experience in data cleaning, exploration, and statistical analysis to support quality insights for a natural history museum project.                </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Pandas</li>
                <li>Matplot</li>
                <li>Seaborn</li>
                <li>Numpy</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://www.kaggle.com/code/osamaalhroub/comprehensive-housing-market-data-analysis" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://www.kaggle.com/code/osamaalhroub/comprehensive-housing-market-data-analysis" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Comprehensive Housing Market Data Analysis</h3>
              <p>
              This project analyzes housing market data across regions, focusing on median prices, homes sold, inventory, and listings. It includes data cleaning, outlier handling, and statistical analysis (mean, median, correlations) to reveal regional and temporal trends. Maricopa County, AZ serves as a case study for peak sales periods, offering valuable insights for real estate and urban planning decisions         

             </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Pandas</li>
                <li>Numpy</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        {}
      </div>
    </Container>
  );
}