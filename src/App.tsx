import AboutSection from './components/sections/AboutSection';
import DonationSection from './components/sections/DonationSection';
import FoundationActivities from './components/sections/FoundationActivities';
import HeroSection from './components/sections/HeroSection';
import MissionSection from './components/sections/MissionSection';
import Navbar from './components/sections/Navbar';
import ProgramsSection from './components/sections/ProgramSection';
import StatsSection from './components/sections/StatsSection';
import ValueSection from './components/sections/ValueSection';
import VolunteerSection from './components/sections/VolunteerSection';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<StatsSection />
				<MissionSection />
				<AboutSection />
				<ProgramsSection />
				<ValueSection />
				<VolunteerSection />
				<FoundationActivities />
				<DonationSection />
			</main>
		</>
	);
}

export default App;
