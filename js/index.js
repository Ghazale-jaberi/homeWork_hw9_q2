/*function getTime(newTime){
    let time = new Date();
    let timeArr =[
        time.getFullYear() , time.getMonth() , time.getDate()
    ]
    const Breakfast= new Date(...timeArr,7);
    const lunch= new Date(...timeArr,12);
    const dinner= new Date(...timeArr,19);
    let changeTime = newTime.split(" ");
    let change2 = changeTime[0].split(":");
    let timeHour  ;
    if(changeTime[1] == "p.m"  && +change2[0] != 12 ){
    timeHour = +change2[0] + 12 
    }
    else{
        timeHour = +change2[0]
    }
    let finallTime = new Date(...timeArr, timeHour, change2[1])
    console.log(finallTime)
    let diffArray = [Breakfast, lunch ,dinner].map((item, i)=>{
    if(finallTime<= item){
    return Math.abs(finallTime - item)
    }
    else{
        return item
    }
    })
    let min = Math.min(...diffArray)/(1000*60)
    let newHour= Math.trunc(min/60)
    let newMin = min % 60
    console.log(`${newHour} ${newMin}`)
    
    }
    
    getTime('05:50 a.m')*/
    const meals = [
        { name: "breakfast", time: "7:00 a.m" },
        { name: "lunch", time: "12:00 p.m" },
        { name: "dinner", time: "7:00 p.m" }
    ];
    
    function parseTime(timeString) {
        const [hours, minutes, peri] = timeString.split(/:| /);
        const hour = parseInt(hours);
        const minute = parseInt(minutes);
        const totalMinutes = (hour % 12 + (peri.toLowerCase() === "p.m" ? 12 : 0)) * 60 + minute;
        return totalMinutes;
    }
    
    function nextMeal(currentTime) {
        const currentMinutes = parseTime(currentTime);
        let minTimeDifference = 24 * 60;
        let nextMealTitle = "";
    
        for (const meal of meals) {
            const mealMinutes = parseTime(meal.time);
            const timeDifference = (mealMinutes - currentMinutes + 24 * 60) % (24 * 60);
            if (timeDifference < minTimeDifference) {
                minTimeDifference = timeDifference;
                nextMealTitle = meal.name;
            }
        }
        const hours = Math.floor(minTimeDifference / 60);
        const minutes = minTimeDifference % 60;
        console.log(`${hours} hours ${minutes} minutes to the next meal: ${nextMealTitle}`);
    }
    
    nextMeal("5:50 a.m");
    nextMeal("2:00 p.m");
    nextMeal("12:00 p.m");