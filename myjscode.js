function checkName() {
  var name_validation = document.getElementById("name").value;
  name_len = name_validation.length;

  if(name_len <= 4) {
    document.getElementById('name-p').innerText = "Value should be greater than 5";
    document.getElementById('name').style.borderColor = "#DC2626";
    return false;
  } else {
    document.getElementById('name-p').innerText = "";
    document.getElementById('name').style.borderColor = "#9CA3AF";
    return true;
  }
}

function checkPassword() {
  let password = document.getElementById('password');
  if(password.value.length < 8) {
    password.style.borderColor = "#DC2626";
    document.getElementById('password-p').innerText = "Password must be 8 characters long";
    return false;
  } else {
    document.getElementById('password-p').innerText = "";
    password.style.borderColor = "#9CA3AF";
    return true;
  }
}

function checkConfirmPassword() {
  let confirm_password = document.getElementById('confirm-password');
  let password = document.getElementById('password');
  if(confirm_password.value !== password.value) {
    document.getElementById('confirm-password-p').innerText = "Password doesn't match!";
    confirm_password.style.borderColor = "#DC2626";
    return false;
  } else {
    document.getElementById('confirm-password-p').innerText = "";
    confirm_password.style.borderColor = "#9CA3AF";
    return true;
  }
}

window.addEventListener('load', ()=> {
  document.getElementById('submit-form').addEventListener('click', submit);
})

function submit() {
  checkName();
  checkPassword();
  checkConfirmPassword();
  
  let email = document.getElementById('email');

  if(email.value.length == 0) {
    document.getElementById('email-p').innerText = "Email is required";
    email.style.borderColor = "#DC2626";
  } else {
    document.getElementById('email-p').innerText = "";
    email.style.borderColor = "#9CA3AF";
  }

  if(checkName() && checkPassword() && checkConfirmPassword()) {
    console.log("Return");
  } else return;
}