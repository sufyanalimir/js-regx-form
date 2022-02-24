let userName = document.getElementById("name");
let mobile = document.getElementById("mobile");
let email = document.getElementById("email");
let password = document.getElementById("pswd");
let confirmPass = document.getElementById("conPswd");
let span = document.getElementsByTagName("span");
let submit = document.getElementById("submit");
let userId = document.getElementById("userId");
let userIdValue = "";

function nameValidation() {
  let nameExpr = /^[A-Za-z. ]{4,30}$/;
  if (nameExpr.test(userName.value)) {
    document.getElementById("name_error").innerHTML = "";
    let fullname = userName.value;
    let strippedName = fullname.replace(/\s+/g, "");
    for (let i = 0; i < 4; i++) {
      userIdValue += strippedName[i];
    }
  } else {
    document.getElementById("name_error").innerHTML = "*Invalid Name..";
  }
}

function mobileValidation() {
  let mobileExpr = /^[789]{1}[0-9]{9}$/;
  if (mobileExpr.test(mobile.value)) {
    document.getElementById("mob_error").innerHTML = "";
    for (let i = 0; i < 2; i++) {
      userIdValue += mobile.value[i];
    }
    userId.value = userIdValue;
    userIdValue = "";
  } else {
    document.getElementById("mob_error").innerHTML = "*Invalid Number";
  }
}

function emailValidation() {
  let emailExpr = /^[A-Za-z0-9_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  if (emailExpr.test(email.value)) {
    document.getElementById("email_error").innerHTML = "";
  } else {
    document.getElementById("email_error").innerHTML = "*Invalid Email";
  }
}

function passwordValidation() {
  let passwordExpr = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if (passwordExpr.test(password.value)) {
    document.getElementById("pswd_error").innerHTML = "";
  } else {
    document.getElementById("pswd_error").innerHTML = "*Invalid Password";
  }
}

function matchPassword() {
  if (password.value.match(confirmPass.value)) {
    document.getElementById("conPswd_error").innerHTML = "";
  } else {
    document.getElementById("conPswd_error").innerHTML =
      "*Passwords do not match";
  }
}

function submitData() {
  let emptyField = false;
  if (
    userName.value === "" ||
    mobile.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPass.value === ""
  ) {
    emptyField = true;
  }
  for (let i = 0; i < span.length; i++) {
    if (span[i].innerHTML === "" && userName.value === "") {
      emptyField = true;
    }
  }

  if (emptyField) {
    alert("All fields are mandatory. Please fill all the details.");
    return false;
  }
}

userName.addEventListener("focusout", nameValidation);
mobile.addEventListener("focusout", mobileValidation);
email.addEventListener("focusout", emailValidation);
password.addEventListener("focusout", passwordValidation);
confirmPass.addEventListener("focusout", matchPassword);
