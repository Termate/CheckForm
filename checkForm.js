function checkForm() {
  var login = document.getElementById('login');
  var password = document.getElementById('password');
  var passwordConfirm = document.getElementById('passwordConfirm');
  login.className = 'norm';
  if (!login.value) {
    alert('пустой логин!');
    login.className = 'empty';
  login.focus();
  return false;
  }
  if (password.value.length<6) {
    alert('Пароль короче 6 символов!');
    possword.className = 'empty';
    password.focus();
    return false;
  }

  if (password.value != passwordConfirm.value) {
    alert ('Поролоь не совпадает');
    password.className = 'empty';
    password.focus();
    return false;
  }
  return true;
}

window.onload = function() {
  var form = document.getElementById('myForm');
  form.onsubmit=checkForm;

}
