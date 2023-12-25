import classes from './App.module.css'
import HeaderText from './components/header/HeaderText'
import TopNavBar from './components/top-nav-bar/main/TopNavBar'
import Profile from './components/top-nav-bar/profile/Profile'
import OutlinedButton from './components/Common/OutlinedButton';
import LeadingHealthcareProviders from './components/leading-healthcare-providers';
import MobileApp from './components/our-mobile-apps/MobileApp';
import SliderBar from './components/testimonials';
import OurServices from './components/our-services/main/OurServices';
import ServiceCard from './components/our-services/service-card/ServiceCard';
import Footer from './components/footer';
import LastArticle from './components/last-article';

import search from "./assets/our-services/search.svg";
import pharmacy from "./assets/our-services/pharmacy.svg";
import details from "./assets/our-services/details.svg";
import consultation from "./assets/our-services/consultation.svg";
import emergency from "./assets/our-services/emergency.svg";
import tracking from "./assets/our-services/tracking.svg";

import headerImage from "./assets/header.png";
import healtcare from "./assets/healtcare.png";
import edward from "./assets/avatars/edward.png";

import article1 from "./assets/articles/article1.png";
import article2 from "./assets/articles/article2.png";
import article3 from "./assets/articles/article3.png";




function App() {


  const customers = [
    {
      name: "Edward Newgate",
      job: "Founder Circle",
      review:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: edward,
    },
    {
      name: "Edward Newgate 2",
      job: "Founder Circle 2",
      review:
        '"2 2 2 2 2 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: edward,
    },
    {
      name: "Edward Newgate 3",
      job: "Founder Circle 2",
      review:
        '"3 3 3 3 3 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: edward,
    },
    {
      name: "Edward Newgate 4",
      job: "Founder Circle 2",
      review:
        '"4 4 4 4 4 Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: edward,
    },
  ];


  const articles = [
    {
      title: "Disease detection, check up in the laboratory",
      subtitle:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
      img: article1,
    },
    {
      title: "EHerbal medicines that are safe for consumption",
      subtitle:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      img: article2,
    },
    {
      title: "Natural care for healthy facial skin",
      subtitle:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
      img: article3,
    },
  ];


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
         <MobileApp
          arr={[
            "Download our mobile apps",
            "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
            "Download  🠗",
          ]}
          img={healtcare}
        />

        <SliderBar
          arr={customers}
          children={undefined}
        ></SliderBar>

        <LastArticle arr={articles} />

        <div className={classes.outlinedButton_viewAll}>
          <OutlinedButton text="View all" />
        </div>

      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
