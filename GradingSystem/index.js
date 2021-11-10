// Problem : Our Grading System
// Take a Number
// If the mark is in between 80 - 100, Print "A+" (マークが80〜100の間にある場合は、「A+」を出力)
// If the mark is in between 70 - 79, Print "A" (マークが70〜79の間にある場合は、「A」を出力)
// If the mark is in between 60 - 69, Print "A-" (マークが60〜69の間にある場合は、「A-」を出力)
// If the mark is in between 50 - 59, Print "B" (マークが50〜59の間にある場合は、「B」を出力)
// If the mark is in between 40 - 49, Print "C" (マークが40〜49の間にある場合は、「C」を出力)
// If the mark is in between 33 - 39, Print "D" (マークが33〜39の間にある場合は、「D」を出力)
// If the mark is in between 0 - 32, Print "F" (マークが0〜32の間にある場合は、「F」を出力)
// Also point out the invalid marks (それ以外は、Invalid Markと表示)

let mark = 101;
if (mark < 0 || mark > 100) {
    console.log('Invalid Mark');
} else if (mark >= 80 && mark <= 100) {
    console.log('A+');
} else if (mark >= 70 && mark <= 79) {
    console.log('A');
} else if (mark >= 60 && mark <= 69) {
    console.log('A-');
} else if (mark >= 50 && mark <= 59) {
    console.log('B');
} else if (mark >= 40 && mark <= 49) {
    console.log('C');
} else if (mark >= 33 && mark <= 39) {
    console.log('D');
} else {
    console.log('F');
}
