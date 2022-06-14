export const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true
  }
  alert('You have entered an invalid email address!')
  return false
}

export const validateUsername = (username) => {
  if (username?.length > 2) {
    return true
  }
  alert('You have entered an invalid username!')
  return false
}

export const validatePassword = (password) => {
  if (password?.length > 7) {
    return true
  }
  alert('You have entered an invalid password!')
  return false
}

export const isValid = (email, username, password) => validateEmail(email) && validateUsername(username) && validatePassword(password)
