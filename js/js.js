// homework 1
while (true) {
    let chose = prompt('choose one of this "+, -, *, /, %, **":')
    if (chose == 'exit') {
        alert('We exitted XO')
        break
    } else if (chose == '+') {
        let num1 = Number(prompt('Input number1:'));
        let num2 = Number(prompt('Input number2:'));
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
    } else if (chose == '-') {
        let num1 = Number(prompt('Input number1:'));
        let num2 = Number(prompt('Input number2:'));
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
    } else if (chose == '*') {
        let num1 = Number(prompt('Input number1:'));
        let num2 = Number(prompt('Input number2:'));
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
    } else if (chose == '/') {
        let num1 = Number(prompt('Input number1:'));
        let num2 = Number(prompt('Input number2:'));
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
    } else if (chose == '**') {
        let num1 = Number(prompt('Input number1:'));
        let num2 = Number(prompt('Input number2:'));
        console.log(`${num1} ** ${num2} = ${num1 ** num2}`)
    }
}

// homework 2
// 1 вариант
// for (let i = 0; i <= 10; i++) {
//     let num = prompt('input number:');
//     if (num % 2 == 0) {
//         console.log(`${num} чётность`);
//     } else {
//         console.log('это не чётность Х(')
//     }
// } 
// 2 вариант
// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i + ' ' + 'чётность')
//     } else {
//         console.log('Эх, зачем мне нечетные, сказал четные!')
//     }
// }