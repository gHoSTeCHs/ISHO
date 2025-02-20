import AboutSection from './components/sections/AboutSection';
import HeroSection from './components/sections/HeroSection';
import MissionSection from './components/sections/MissionSection';
import Navbar from './components/sections/Navbar';
import StatsSection from './components/sections/StatsSection';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<StatsSection />
				<MissionSection />
				<AboutSection />
			</main>
		</>
	);
}

export default App;
