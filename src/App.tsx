import classes from './App.module.css'
import TopNavBar from './components/top-nav-bar/main/TopNavBar'
import Profile from './components/top-nav-bar/profile/Profile'

function App() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.headerRow}>
        <Profile name='T'></Profile>
        <TopNavBar arr={['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us']}></TopNavBar>
        </div>
      </header>
    </>
  )
}

export default App
