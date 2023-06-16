import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');

// nasłuch formularza
form.addEventListener(
  'input',
  throttle(event => {
    if (
      event.target.tagName === 'INPUT' ||
      event.target.tagName === 'TEXTAREA'
    ) {
      const formData = new FormData(form);
      const formValues = Object.fromEntries(formData.entries());
      localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
    }
  }, 500)
);

const StorageData = localStorage.getItem('feedback-form-state');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

if (StorageData !== null) {
  try {
    const StorageDataObject = JSON.parse(StorageData);
    emailInput.value = StorageDataObject.email;
    messageInput.value = StorageDataObject.message;
  } catch {
    console.log('Błąd wczytywanie danych z magazynu!');
    emailInput.value = '';
    messageInput.value = '';
  }
} else {
  emailInput.value = '';
  messageInput.value = '';
}

//po wysłaniu formularza:
form.addEventListener('submit', function (event) {
  event.preventDefault();

  //wyloguj obiekt
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData.entries());
  console.log(formValues);

  // Wyczyść storage
  localStorage.removeItem('feedback-form-state');

  // Wyczyść pola
  emailInput.value = '';
  messageInput.value = '';
});
