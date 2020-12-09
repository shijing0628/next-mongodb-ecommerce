function validateEmail(email) {
  const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return re.test(email);
}

const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password)
    return 'Please add all fields'

  // if (!validateEmail(email)) {
  //   return 'Invalid email'
  // }

  if (password.length < 6) {
    return 'password must be at least 6 characters.'
  }

  if (password !== cf_password)
    return 'Confirm password is not matched password'
}




export default valid