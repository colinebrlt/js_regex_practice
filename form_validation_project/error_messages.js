const errorMessages = {
  empty: 'The input must not be blank',
  firstName: {
    length: 'Must be over 3 characters'
  },
  age:{
    format: "Must only contain digits",
    minimum: 'Must be over 18 years old'
  },
  email:{
   confirmation: "Email confirmation doesn't match",
   format: "Email doesn't match a typical email format"
  },
  password:{
    confirmation: "Password confirmation doesn't match",
    length: "Password must be more than 6 characters"
  },
  tcu:{
    acceptance: "Must agree to the TCUs",
  }
};