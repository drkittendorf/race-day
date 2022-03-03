// Running Project
console.log(`Running Project`)

let earlyRegistration = Boolean(Math.round(Math.random()))
let raceNumber = Math.floor(Math.random() * 100);
raceNumber = earlyRegistration ? raceNumber + 1000 : raceNumber + 0 ;
console.log(raceNumber);

let runnerAge = Math.floor(Math.random() * 100);
    if (runnerAge > 18 )
    {console.log(`You race at 9:30am your race number is  ${raceNumber}`);}
     else if (earlyRegistration = false)
    {console.log(`You race at 11:00am your race number is  ${raceNumber}`);}
     else 
     {console.log (`You race at 12:30 your race number is  ${raceNumber}`);};
