import React from "react";
import Timer from "react-compound-timer";

function TimerComponent() {
	return (
		<div className="text-4xl">
			<Timer initialTime={86400000} direction="backward">
				{() => (
					<React.Fragment>
						{/* <Timer.Days />: */}
						<Timer.Hours />:
						<Timer.Minutes />:
						<Timer.Seconds />
						{/* <Timer.Milliseconds /> milliseconds */}
					</React.Fragment>
				)}
			</Timer>
		</div>
	);
}

export default TimerComponent;
