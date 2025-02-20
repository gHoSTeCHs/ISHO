import HeroSection from './components/sections/HeroSection';
import Navbar from './components/sections/Navbar';
import StatsSection from './components/sections/StatsSection';

function App() {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<StatsSection />
			</main>
		</>
	);
}

export default App;
