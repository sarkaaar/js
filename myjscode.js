function submit_() {

  var name_validation = document.getElementById("name").value;
  name_len = name_validation.length;

  if(name_len <= 4)
    alert("Please Enter A Valid Name");

  var pass_validation = document.getElementById("password").value;
  pass_len = pass_validation.length;

  if(pass_len <= 8){
    alert("Please Enter A Valid Password");
    document.getElementById("password").style.border="2px solid red";
  }

  var conf_pass_validation = document.getElementById("confirm_password").value;

  if (pass_validation != conf_pass_validation)
    document.getElementById("confirm_password").style.border="2px solid red";
    document.getElementById("password").style.border="2px solid red";
    alert("Passwords do Not Match");

}