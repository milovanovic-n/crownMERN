// REGISTER VALIDATOR
module.exports.validateRegisterInput = (
  displayName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if(displayName.trim() === "") {
    errors.message = "Username cannot be empty"
  }
  if(email.trim() === "") {
    errors.message = "Email cannot be empty"
  } else {
    const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if(!email.match(regEx)) {
      errors.message = "Make sure you provide valid email adress"
    }
  }
  if(password === "") {
    errors.message = "Password cannot be empty";
  } else if(password !== confirmPassword) {
    errors.message = "Passwords do not match";
  }
  
  return {
    errors,
    valid: Object.keys(errors).length < 1 
  }
};

// LOGIN VALIDATOR
module.exports.validateLoginInput = (email, password) => {
  const errors = {};
  if(email.trim() === ""){
    errors.message = "Username cannot be empty";
  }
  if(password.trim() === ""){
    errors.message = "Password cannot be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}