import classes from './App.module.css'
import HeaderText from './components/header/HeaderText'
import TopNavBar from './components/top-nav-bar/main/TopNavBar'
import Profile from './components/top-nav-bar/profile/Profile'
import OutlinedButton from './components/Common/OutlinedButton';
import LeadingHealthcareProviders from './components/leading-healthcare-providers';


import headerImage from "./assets/header.png";
import healtcare from "./assets/healtcare.png";
import OurServices from './components/our-services/main/OurServices';
import ServiceCard from './components/our-services/service-card/ServiceCard';
import search from "./assets/our-services/search.svg";
import pharmacy from "./assets/our-services/pharmacy.svg";
import details from "./assets/our-services/details.svg";
import consultation from "./assets/our-services/consultation.svg";
import emergency from "./assets/our-services/emergency.svg";
import tracking from "./assets/our-services/tracking.svg";

function App() {
  return (
    <>
     <div className={classes.padding_block}>
     <header className={classes.header}>
          <div className={classes.headerRow}>
            <Profile name="T" />
            <TopNavBar
              arr={[
                "Home",
                "Find a doctor",
                "Apps",
                "Testimonials",
                "About us",
              ]}
            />
          </div>
          <div className={classes.headerRow}>
            <HeaderText
              arr={[
                "Virtual healthcare for you",
                "Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
                "Consult today",
              ]}
            />
            <div className={classes.imgBox}>
              <img src={headerImage} alt="Header Picture" />
            </div>
          </div>
        </header>

        <OurServices>
          <ServiceCard
            title="Search doctor"
            subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
            logo={search}
          />
          <ServiceCard
            title="Online pharmacy"
            subtitle="Buy  your medicines with our mobile application with a simple delivery system"
            logo={pharmacy}
          />
          <ServiceCard
            title="Consultation"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={consultation}
          />
          <ServiceCard
            title="Details info"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={details}
          />
          <ServiceCard
            title="Emergency care"
            subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family"
            logo={emergency}
          />
          <ServiceCard
            title="Tracking"
            subtitle="Track and save your medical history and health data "
            logo={tracking}
          />
        </OurServices>
        <div className={classes.outlinedButton_learnMore}>
          <OutlinedButton text="Learn more" />
        </div>
        <LeadingHealthcareProviders
          arr={[
            "Leading healthcare providers",
            "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
            "Learn more",
          ]}
          img={healtcare}
        />
      </div>
    </>
  )
}

export default App
