import "./App.css";
import TimerComponent from "../src/components/Timer/index";
import Typical from "react-typical";

function App() {
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
						className=" text-2xl "
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
					<p className="text-base font-medium  font-roboto">
						Sign up to get notified when it’s ready.
					</p>
					<form name="contact" method="post" className="mt-3 sm:flex">
						<label for="email" className="sr-only">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							className="border-todoodleBlack block w-full py-3 pl-2 rounded-md placeholder-gray-800 shadow-sm sm:flex-1 "
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							className="mt-3 w-full px-6 py-3 border text-todoodleWhite border-transparent text-base font-medium rounded-md  bg-todoodleBlack shadow-sm hover:bg-gray-800 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
						>
							Notify me
						</button>
					</form>
					<p className="mt-3 text-sm ">
						We care about the protection of your data. Read our{" "}
						<a href="#" className="font-medium text-white-900 underline">
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
