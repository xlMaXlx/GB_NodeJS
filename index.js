var colors = require('colors');

function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

var isNumber = function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

var start = process.argv[2];
var end = process.argv[3];
if (isNumber(start) && isNumber(end)) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            counter++;
            if (counter % 3 == 1) {
                console.log(colors.green(i));
            }
            else if (counter % 3 == 2) {
                console.log(colors.yellow(i));
            }
            else {
                console.log(colors.red(i));
            }
        }
    }
    if (counter == 0) {
        colsole.log(colors.red('Нету простых чисел в диапазоне'));
    }
}
else {
    colsole.log(colors.red('Неверно указан диапазон'));
}


// Используем  - cmd -> node index start(начало диапазона) end(конец)

