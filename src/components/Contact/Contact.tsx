import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
    <header>
      <h2>Contact</h2>
      <p>Ready to get started on your project?</p>
      <p>Contact me now for a Free consultation.</p>
    </header>
    <div className="contacts">
      <div>
        <a href="mailto:7roubb@gmail.com">
          <img src={emailIcon} alt="Email" />
        </a>
        <a href="mailto:7roubb@gmail.com">7roubb@gmail.com</a>
      </div>
      <div>
        <a href="tel:+972594425273">
          <img src={phoneIcon} alt="Phone No" />
        </a>
        <a href="tel:+972594425273">(+972) 594425273</a>
      </div>
    </div>
    {/* Map */}
    <div className="map">
      <iframe
        title="Location Map"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFgVKhabs8jxJKklFHRDHGiU43f6hS0kE&q=31.508965, 35.034528&zoom=15`}    
        loading="lazy"
      ></iframe>
    </div>
  </Container>
  )
}