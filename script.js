const clientName = document.getElementById('name');
const email = document.getElementById('email');
const nameContainer = document.querySelector('.name-container');
const emailContainer = document.querySelector('.email-container');


const valName =() => {
  const re = /^[a-zA-Z]{2,20}$/;
  if(!re.test(clientName.value)) {
    clientName.classList.add('is-invalid');
    nameContainer.insertAdjacentHTML('beforeend', '<small class="error">name should be letters only</small>');
    setTimeout(()=> nameContainer.removeChild(document.querySelector('small')), 2000 )
    
  } else {
    clientName.classList.remove('is-invalid');
    console.log('activated');
  }
}

const valEmail = () => {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if(!re.test(email.value)) {
    email.classList.add('is-invalid');
    emailContainer.insertAdjacentHTML('beforeend', '<small class="error">Please input a valid email address</small>');
    setTimeout(()=> emailContainer.removeChild(document.querySelector('small')), 2000 )
  } else {
    email.classList.remove('is-invalid');
  }
}

clientName.addEventListener('blur', valName);
email.addEventListener('blur', valEmail);