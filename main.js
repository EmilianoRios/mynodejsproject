'use strict';
console.log("Funcionando...")

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

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

  console.log(email, password);

})

// SingUp
const signUpForm = document.querySelector('#signUpForm');

signUpForm.addEventListener('submit', e => {

  e.preventDefault();
  const auth = getAuth();
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;
  const alert = document.querySelector('#toastN');
  const alertText = document.querySelector('#toastN #toastNotification');
  const myModal = document.querySelector('#signUpModal');
  const errorAlert = document.querySelector('#signUpError');
  const modalSignUp = bootstrap.Modal.getInstance(myModal);

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Close the modal
      modalSignUp.hide();

      // Signed in
      const user = userCredential.user;

      // Clear the Form
      signUpForm.reset();

      // Notification
      alertText.innerText = 'Te has registrado!';
      alert.classList.add('bg-success');
      alert.classList.add('show');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (errorCode == 'auth/weak-password') {
        errorAlert.innerText = 'Email o contraseña incorrectos!';
      }

      if (errorCode == 'auth/email-already-in-use') {
        errorAlert.innerText = 'Email ya registrado!';
      }

      errorAlert.classList.add('text-danger');
      errorAlert.classList.remove('visually-hidden');

    });
})