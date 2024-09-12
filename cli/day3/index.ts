const arr = ["Peter", "Marianne", true, "Helle", 8] as const;

for (const v of arr) {
    console.log(`${v} is a ${typeof v}`);
}

const findLargest = (n1: number, n2: number, n3: number, n4: number): number =>
    Math.max(n1, n2, n3, n4);

const checkOnRange = (check: number, from: number, to: number): boolean =>
    from <= check && check <= to;

const rng = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const higherOrLower = async () => {
    const LOWER = 1;
    // the 100 bound is too high to guess, idw to waste time
    const UPPER = 20;

    const random = rng(LOWER, UPPER);
    let tries = 0;

    console.log("Guess the random number!");

    console.write("Number> ");
    // bun api
    for await (const line of console) {
        tries++;
        if (Number(line) == random) {
            console.log("You guessed correctly!");
            console.log(`Number of guesses: ${tries}`);
            return;
        }
        console.log("Wrong Guess!");
        console.write("Number> ");
    }
};

higherOrLower();
