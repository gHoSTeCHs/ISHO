import { Navbar } from './components/sections/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MissionSection } from './components/sections/MissionSection';
import { ProgramsSection } from './components/sections/ProgramsSection';
import { StorySection } from './components/sections/StorySection';
import { FiguresSection } from './components/sections/FiguresSection';
import { HistorySection } from './components/sections/HistorySection';
import { ReachSection } from './components/sections/ReachSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { SupportSection } from './components/sections/SupportSection';
import { Footer } from './components/sections/Footer';
import { usePageReveals } from './lib/usePageReveals';

function App() {
	usePageReveals();

	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<MissionSection />
				<ProgramsSection />
				<StorySection />
				<FiguresSection />
				<HistorySection />
				<ReachSection />
				<PartnersSection />
				<SupportSection />
			</main>
			<Footer />
		</>
	);
}

export default App;
