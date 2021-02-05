let message;
let login = prompt('');

login == 'Сотрудник' ?  message = 'Привет':
    login == 'Директор' ? message = 'Здравствуйте':
    login == '' ? message = 'Нет логина':
    message = '';

alert(message);

/*let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

//let accessAllowed = (age > 18) ? true : false;