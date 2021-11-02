let spinyThing = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ', '\r/   ','\r-   ','\r\\   ','\n'];

let delay = 100;

spinyThing.forEach((spinyThing) => {
    setTimeout(() => {
        process.stdout.write(spinyThing);
    }, delay);
    delay += 200;
})

// Same template as typewriter but without the need to split.