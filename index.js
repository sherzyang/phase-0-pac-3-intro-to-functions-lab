function shout(string) {
    return string.toUpperCase();
  }

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(`${string.toUpperCase()}`);
}

function logWhisper(string) {
    console.log(`${string.toLowerCase()}`);
}

function  sayHiToHeadphonedRoommate(string) {
    
    const upper = "YES INDEED!";
    const lower = "I can\'t hear you!";
    const dinner = "I would love to!";
    let greeting; 

    switch(string) {
        case string.toUpperCase():
            greeting = upper;
            break;
        case string.toLowerCase():
            greeting = lower;
            break;
        case "Let's have dinner together!":
            greeting = dinner;
            break;
    } 

    console.log(greeting);
    return (greeting);
}