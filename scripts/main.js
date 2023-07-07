// Задача 1
var num1to10 = +prompt('Задача 1.\nВведите число: ');
if(num1to10 >= 1 && num1to10 <= 10 && num1to10%2 == 0) {
    alert('True');
}
else {
    alert('False');
}
// Задача 2
var numStart = +prompt('Задача 2.\nВведите начало диапазона: ');
var numEnd = +prompt('Введите конец диапазона: ')
var grade = 2;

if(numEnd < numStart) {
    var temp = numEnd;
    numEnd = numStart;
    numStart = temp;
}

for(var i=numStart; i<numEnd; i++) {
    for(var j=0; j < 20; j++) {
        if(i === grade ** j)
            alert(i);
    }
}
// Задача 3
var numFirst = +prompt('Задача 3.\nВведите число: ');
var sum = numFirst;

while(true) {
    if(confirm('Ввести ещё число?')) {
        var numOther = +prompt('Введите число: ');
        sum += numOther;
    }
    else {
        alert(`Сумма всех введенных чисел = ${sum}`);
        break;
    }

}
// Задача 4
var string = prompt('Задача 4.\nВведите строку:');
var spaces = string.match(/\s/g);
var number1 = string.match(/[1]/g);

if(spaces != null && number1 != null) {
    string = string.replace(/\s/g, '').replace(/[1]/g, '');
    alert(string);
}
else {
    alert('Отсутсвуют пробелы и 1-цы');
}
// Задача 5
var counter = 0;
var result = '';
do {
    var random = Math.floor(Math.random()*(20-1)+1);
    if(random % 3 != 0) {
        result += random + '\n';
        counter++;
    }
}
while (counter < 10);
alert(`Задача 4.\nСлучайные числа: ${result}`);