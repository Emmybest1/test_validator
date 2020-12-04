/**here you go:

Implement the "validate" function based on the provided test cases.

expect('some-string'.validate('!empty')).toEqual(true)

expect('some-string'.validate('length>30')).toEqual(false)

expect('some-string'.validate('!length<=10')).toEqual(true)

expect('some-string'.validate('length=3')).toEqual(false)

expect('some-string'.validate(/^.*-s/i)).toEqual(true)

**/

/**
 *@function {validate}
 *@param {@param !==empty}: result to true
 *@param {@param length >30}:result to false
 *@param {@param !length <=10}:result to true
 *@param {@param length === 3}: result to false
 *@param {@param content passes /^.*-s/i regExp}:result true
 */

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

/**
 *@test: function execution below
 *
 */
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
