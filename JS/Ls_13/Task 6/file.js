while (true){
    let number = prompt("Введите число больше 100",'');
    if (number < 100 && number!=null){
        alert("Меня не обнешь");
    }
    else if (number == null){
        alert("Отмена");
    }
    else {
        alert("Good");
        break;
    }
}

/*let num;

do {
  num = prompt("Введите число, большее 100?", 0);
} while (num <= 100 && num);*/