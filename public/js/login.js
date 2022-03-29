// import axios from 'axios';
// // const axios = require('axios')
// import { showAlert,  } from "./alerts";

const login = async (email, password) => {
  console.log('LOGIN');
  console.log(email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      // showAlert('success', 'Logged in successfully')
      alert('Logged in successfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    // showAlert('error', err.response.data.message);
    alert(err.response.data.message);
  }
};

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   login(email, password);
// });

document.getElementById('loginbtn').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  login(email, password);
});

const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:8000/api/v1/users/logout',
    });

    if (res.data.status === 'success') {
      location.reload(true);
    }
  } catch (err) {
    alert('Error logging out! Try again.');
  }
};

const logoutForm = document.getElementById('logout');
if (logoutForm) {
  logoutForm.addEventListener('click', () => {
    console.log('hello');
    logout;
  });
}
