import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import LiveTracking from '../components/LiveTracking/LiveTracking';
import Services from '../components/Services/Services';
import MechanicCard from '../components/MechanicCard/MechanicCard';
import FooterStats from '../components/FooterStats/FooterStats';
import './Home.css';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="main-grid container">
        {/* Left Column */}
        <div className="home-left">
          <Hero />
          <Services />
        </div>

        {/* Right Column */}
        <div className="home-right">
          <LiveTracking />
          <MechanicCard />
        </div>
      </div>

      <FooterStats />
    </>
  );
};

export default Home;