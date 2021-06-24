const validate = (argument) => {
    if (typeof argument == "string") {
        const argLength = argument.length;
        const argRegExp = /^.*-s/i;

        switch (true) {
            case argLength != "" && argLength > 0 && argLength < 3:
                return true;

            case argLength > 30:
                return false;

            case !argLength <= 10 && argLength > 10 && argLength < 30:
                return true;

            case argLength === 3:
                return false;

            case argRegExp.test(argument):
                return true;

            default:
                return "Something is invalid 💔";
        }
    } else throw new Error("Please insert a string value");
};

const test_1 = validate("le");
const test_2 = validate("leshdhdhdhdhdhhdg8983uhdhdhdhdhhdhdd");
const test_3 = validate("hdhdhdhddhddd");
const test_4 = validate("dot");
const test_5 = validate(" ");
const test_6 = validate("😄☕️");

console.log(test_1);
console.log(test_2);
console.log(test_3);
console.log(test_4);
console.log(test_5);
console.log(test_6);
