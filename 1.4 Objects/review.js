

    const weeksWorkout = {};

    function addWorkout(day,workout, minutes) {
      console.log(day,workout,minutes);
      weeksWorkout[day] = {
        workout: workout,
        time: minutes,
      }

    }

    addWorkout('sunday','stairmaster','30');
    addWorkout('monday','lifts','58');
    addWorkout('tuesday','run','59');
    addWorkout('wednesday','swim','60');
    console.log(weeksWorkout);


  let totalTime = 0;

    for (let day in weeksWorkout) {
      // console.log(weeksWorkout[day]);
      totalTime = totalTime + weeksWorkout[day].time;
      console.log(totalTime);

      if (weeksWorkout[day]) {
        console.log(`on day ${day} you spent ${weeksWorkout[day].time} at ${weeksWorkout[day].workout}}`)
      }

      }
