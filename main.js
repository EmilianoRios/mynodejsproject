'use strict';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

// ---------- SingIn ---------------


const signInForm = document.querySelector('#signInForm');

signInForm.addEventListener('submit', e => {

  // * ---- FORM VALUES ---
  e.preventDefault();
  const auth = getAuth();
  const email = document.querySelector('#emailSignIn').value;
  const password = document.querySelector('#passwordSignIn').value;

  // * ---- MODAL ----
  const myModal = document.querySelector('#signInModal');
  const modalSignIn = bootstrap.Modal.getInstance(myModal);

  // * ---- NOTIFICATION'S ----
  const toastN = document.querySelector('#toastN');
  const toastNText = document.querySelector('#toastN #toastNotification');

  // * ---- ERROR HELPER ----
  const errorHelper = document.querySelector('#signInError');

  // * ---- SIGNIN ----
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      console.log('Logeado')

      // Close the modal
      modalSignIn.hide();

      // Signed in
      const user = userCredential.user;

      // Clear the Form
      signInForm.reset();

      // Notification
      toastNText.innerText = `¡Bienvenido ${user.email}!`;
      toastN.classList.add('bg-primary');
      toastN.classList.add('show');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);

      if ((errorCode == 'auth/wrong-password') || (errorCode == 'auth/user-not-found')) {
        errorHelper.innerText = 'Email o contraseña incorrectos!';
      }

      errorHelper.classList.add('text-danger');
      errorHelper.classList.remove('visually-hidden');

    });
});


// ---------- SingUp ---------------


const signUpForm = document.querySelector('#signUpForm');

signUpForm.addEventListener('submit', e => {

  // * ---- FORM VALUES ----
  e.preventDefault();
  const auth = getAuth();
  const email = document.querySelector('#emailSignUp').value;
  const password = document.querySelector('#passwordSignUp').value;

  // * ---- MODAL ----
  const myModal = document.querySelector('#signUpModal');
  const modalSignUp = bootstrap.Modal.getInstance(myModal);

  // * ---- NOTIFICATION'S ----
  const toastN = document.querySelector('#toastN');
  const toastNText = document.querySelector('#toastN #toastNotification');

  // * ---- ERROR HELPER ----
  const errorHelper = document.querySelector('#signInError');

  // * ---- SIGNUP ----
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Close the modal
      modalSignUp.hide();

      // Signed in
      const user = userCredential.user;

      // Clear the Form
      signUpForm.reset();

      // Notification
      toastNText.innerText = `¡Te has registrado ${user.email}!`;
      toastN.classList.add('bg-success');
      toastN.classList.add('show');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      if (errorCode == 'auth/weak-password') {
        errorHelper.innerText = 'Email o contraseña incorrectos!';
      }

      if (errorCode == 'auth/email-already-in-use') {
        errorHelper.innerText = 'Email ya registrado!';
      }

      errorHelper.classList.add('text-danger');
      errorHelper.classList.remove('visually-hidden');

    });
});

// ---- SINGOUT ----

const logOutSession = document.querySelector('#logOutSession');

logOutSession.addEventListener('click', e => {

  e.preventDefault();
  const auth = getAuth();
  signOut(auth)
  .then(() => {
  console.log('LogOut')
  // Sign-out successful.
  // * ---- NOTIFICATION'S ----
  const toastN = document.querySelector('#toastN');
  const toastNText = document.querySelector('#toastN #toastNotification');

  toastNText.innerText = `¡Cerraste Sesión!`;
  toastN.classList.add('bg-info');
  toastN.classList.add('show');
  })
  .catch((error) => {
  // An error happened.
  });
});

console.log(user);