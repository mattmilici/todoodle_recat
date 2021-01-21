import React from "react";
import Timer from "react-compound-timer";
import moment from "moment";
import "moment-timezone";

function TimerComponent() {
	function TimeRemainingInDay() {
		let Hours = moment().format("HH") * 3600000;
		let Minutes = moment().format("mm") * 60000;
		let Seconds = moment().format("ss") * 1000;
		let timeinmili = Hours + Minutes + Seconds;
		let timeinday = 86400000;
		let timeremaining = timeinday - timeinmili;
		console.log(timeremaining);
		return timeremaining;
	}

	return (
		<div className="text-4xl">
			<Timer initialTime={TimeRemainingInDay()} direction="backward">
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
