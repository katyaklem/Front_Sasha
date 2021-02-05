let number = prompt("Введите число, а мы скажем какое оно :)", '')
if (number > 1){
    alert(`Вы ввели ${number}, это положительно число.`);
}
else if (number == 0){
    alert(`Вы ввели ${number}, это ноль.`);
}
else {
    alert(`Вы ввели ${number}, это отрицательно число.`);
}