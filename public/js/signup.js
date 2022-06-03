// import axios from 'axios';
// // const axios = require('axios')
// import { showAlert,  } from "./alerts";

const signup = async (name, email, password, passwordConfirm) => {
    try {
      const res = await axios({
        method: 'POST',
        url: '/api/v1/users/signup',
        data: {
          name,
          email,
          password,
          passwordConfirm
        },
      });

      console.log("tutuuse")
  
      if (res.data.status === 'success') {
        // showAlert('success', 'Logged in successfully')
        alert('Account created successfully');
        window.setTimeout(() => {
          location.assign('/');
        }, 1500);
      }
    } catch (err) {
      // showAlert('error', err.response.data.message);
      alert(err.response.data.message);
    }
  };
  
  
  document.getElementById('signupbtn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('email').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });
