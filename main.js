'use strict';
console.log("Funcionando...")

import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// SingIn
const signInForm = document.querySelector('#signInForm');

signInForm.addEventListener('submit', e => {

  e.preventDefault();
  // const auth = getAuth();
  const email = document.querySelector('#emailSignIn').value;
  const password = document.querySelector('#passwordSignIn').value;

  // auth
  //     .createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;

  //     })

  console.log(email,password)

})

// SingUp
const signUpForm = document.querySelector('#signUpForm');

signUpForm.addEventListener('submit', e => {

  e.preventDefault();
  const auth = getAuth();
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;

  auth
      .createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('registrado')
      })

  console.log(email,password)
})