const outputName = (fname: string, lname: string) =>
    console.log(`${fname} ${lname}`);

const calcRectArea = (x: number) => x * x;

const calcDistance = (speed: number, time: number) => speed * time;

const testCalcDistance = () => {
    console.log(`You have travelled ${calcDistance(10, 100)} km`);
};

class Calculator {
    private fname: string;
    private lname: string;

    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
    }

    outputName = () => outputName(this.fname, this.lname);

    calcRectArea = calcRectArea;
    calcDistance = calcDistance;
}

testCalcDistance();
const calculator = new Calculator("bartbie", "b");
calculator.outputName();
console.log(calculator.calcRectArea(11));
console.log(calculator.calcDistance(10, 12));
