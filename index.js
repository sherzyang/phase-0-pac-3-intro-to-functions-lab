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
    switch(string) {
        case string.toLowerCase():
            console.log("I can\'t hear you!");
            break;
        case string.toUpperCase():
            console.log("YES INDEED!");
            break;
        case "Let's have dinner together!":
            console.log("I would love to!");
            break;
    }    
}