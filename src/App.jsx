import ScientistProfile from "./ScientistProfile";
import "./App.css";

function App() {
	return (
		<>
			<h1>Notable Scientists</h1>
			<section className="profile">
				<ScientistProfile
					name="Maria Skłodowska-Curie"
					imageSrc="szV5sdG"
					profession="physicist and chemist"
					numAwards={4}
					awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
					discovery="polonium (chemical element)"
				/>
			</section>
			<section className="profile">
				<ScientistProfile
					name="Katsuko Saruhashi"
					imageSrc="YfeOqp2"
					profession="geochemist"
					numAwards={2}
					awards="Miyake Prize for geochemistry, Tanaka Prize"
					discovery="a method for measuring carbon dioxide in seawater"
				/>
			</section>
			<section className="profile">
				<ScientistProfile
					name="Albert Einstein"
					imageSrc="k4D6lXr"
					profession="physicist"
					numAwards={10}
					awards="Gold Medal of the Royal Astronomical Society, Nobel Prize in Physics, Copley Medal, Max Planck Medal, Matteucci Medal, Franklin Medal, Barnard Medal, ForMemRS, Time Person of the Century, Foreign Member of the Royal Society"
					discovery="Theory of relativity, Brownian movement, Mass-energy equivalence, Einstein field equations, Bose-Einstein statistics, EPR paradox, Cosmological constant, Gravitational wave, E=mc²"
				/>
			</section>
		</>
	);
}

export default App;
