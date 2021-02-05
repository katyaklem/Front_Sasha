let login = prompt("Введите логин",'');

if (login == "Boss"){
    let pass = prompt ("Введите пароль",'');
    if (pass == "Boss"){
        alert("Hello");
    } 
    else if (pass == '' || pass == null ){
        alert("Отмена");
    }
    else {
        alert("Я вас не знаю")
    }    
}
else if (login == '' || login == null){
    alert("Отмена");
}
else {
    alert("Я вас не знаю")
}