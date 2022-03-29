// import "@babel/polyfill";
// import { login } from './login';

// DOM ELEMENTS
const mapBox = document.getElementById('map');

// VALUES

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
}

// document.querySelector('.form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   login(email, password);
// });

// document.getElementById('loginbtn').addEventListener('click', (e) => {
//   e.preventDefault();
//   const email = document.getElementById('email').value;
//   const password = document.getElementById('password').value;
//   login(email, password);
// });

//  type is either 'password' or 'data'
const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.1:8000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:8000/api/v1/users/updateMe';

    const res = await axios({
      method: 'PATCH',
      url: url,
      data,
    });

    if (res.data.status === 'success') {
      alert(`${type.toUpperCase()} updated successfully`);
    }
  } catch (err) {
    alert(err.response.data.message);
  }
};

const userDataForm = document.getElementById('accountform');

if (userDataForm) {
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('email').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    console.log(form);

    // const email = document.getElementById('email').value;
    // const name = document.getElementById('name').value;
    updateSettings(form, 'data');
  });
}

const userPasswordForm = document.getElementById('passwordform')
if (userPasswordForm) {
    userPasswordForm.addEventListener('submit', async (e) => {
      e.preventDefault();
    document.getElementById('passwordSave').textContent = 'Updating.......'

      const passwordCurrent = document.getElementById('password-current').value;
      const password = document.getElementById('password').value;
      const passwordConfirm = document.getElementById('password-confirm').value;

      await updateSettings({passwordCurrent, password, passwordConfirm}, 'password');
      document.getElementById('passwordSave').textContent = 'SAVE PASSWORD'
      document.getElementById('password-current').value = '';
      document.getElementById('password').value = '';
      document.getElementById('password-confirm').value = '';

    });
  }
