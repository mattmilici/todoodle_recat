import logo from "./logo.svg";
import "./App.css";
import TimerComponent from "../src/components/Timer/index";

function App() {
	return (
		<div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 md:p-20 text-white h-screen w-full">
			<div className=" mx-1 my-12 md:mx-32 md:my-12 lg:mx-56 lg:my-24">
				<h1 className="text-5xl md:text-8xl font-bold mb-12 text-white">
					Todoodle
				</h1>
				<h1 className="mb-12 text-2xl ">
					What do you need to todoodle today?.... |
				</h1>
				<h1 className="mb-3 text-xl">you've got time</h1>
				<TimerComponent />
				<div class="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
					<p class="text-base font-medium  font-roboto">
						Sign up to get notified when it’s ready.
					</p>
					<form action="#" method="POST" class="mt-3 sm:flex">
						<label for="email" class="sr-only">
							Email
						</label>
						<input
							type="text"
							name="email"
							id="email"
							className="block w-full py-3 pl-2 rounded-md placeholder-gray-500 shadow-sm sm:flex-1 border-black"
							placeholder="Enter your email"
						/>
						<button
							type="submit"
							class="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md  bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
						>
							Notify me
						</button>
					</form>
					<p class="mt-3 text-sm ">
						We care about the protection of your data. Read our{" "}
						<a href="#" class="font-medium text-white-900 underline">
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
