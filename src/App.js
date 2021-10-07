import React from "react";
import "./App.css";
import TimerComponent from "../src/components/Timer/index";
import Typical from "react-typical";
import { ReactComponent as ReactLogo } from './img/download_appstore.svg';

function App() {
	const [notified, setnotified] = React.useState(true);

	function changeState() {
		setnotified(false);
	}
	return (
		<div className="bg-white p-6 md:p-20 text-white h-screen w-full">
			<div className=" mx-1 my-12 md:mx-32 md:my-12 lg:mx-56 lg:my-24">
				<h1 className="text-7xl md:text-8xl font-bold mb-12 text-todoodleBlack">
					Todoodle
				</h1>
				<h1 className="mb-2 text-xl md:text-2xl ">
					What do you need to todoodle today?
				</h1>
				<p id="animated Text" className=" mb-12 text-xl md:text-2xl">
					I need to{" "}
					<Typical
						className="text-xl md:text-2xl "
						loop={Infinity}
						wrapper="r"
						steps={[
							"go for a run...",
							1000,
							" call mom",
							1000,
							"book my hotel...",
							1000,
							"pick up groceries...",
							1000,
							"update my resume...",
							1000,
						]}
					/>
				</p>
				<h1 className="mb-3 text-xl">you've got time</h1>
				<TimerComponent />
				<div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
					<div className="hover:cursor-pointer" onClick={() => {
						window.open("https://apps.apple.com/us/app/todoodle-do-more-together/id1551371631")
					}}>
						<ReactLogo />
					</div>

					<p className="mt-3 text-sm ">
						We care about the protection of your data. Read our{" "}
						<a href="/privacy.pdf" target="_blank" className="font-medium text-white-900 underline">
							Privacy Policy
						</a>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default App;
