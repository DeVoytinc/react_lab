import classes from './App.module.css'
import HeaderText from './components/header/HeaderText'
import TopNavBar from './components/top-nav-bar/main/TopNavBar'
import Profile from './components/top-nav-bar/profile/Profile'

import headerImage from "./assets/header1.png";
import OurServices from './components/our-services/main/OurServices';
import ServiceCard from './components/our-services/service-card/ServiceCard';
import search from "./assets/our-services/search.png";
import diagram_docs from "./assets/our-services/diagram_docs.png";
import docs from "./assets/our-services/docs.png";
import med_baggage from "./assets/our-services/med_baggage.png";
import person_docs from "./assets/our-services/person_docs.png";
import pills from "./assets/our-services/pills.png";
import OutlinedButton from './components/Common/OutlinedButton';

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
            logo={search}
          />
          <ServiceCard
            title="Consultation"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={search}
          />
          <ServiceCard
            title="Details info"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={search}
          />
          <ServiceCard
            title="Emergency care"
            subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family"
            logo={search}
          />
          <ServiceCard
            title="Tracking"
            subtitle="Track and save your medical history and health data "
            logo={search}
          />
        </OurServices>
        <div className={classes.outlinedButton_learnMore}>
          <OutlinedButton text="Learn more" />
        </div>
      </div>
    </>
  )
}

export default App
