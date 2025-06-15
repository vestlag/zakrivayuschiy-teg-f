const saveButton = document.querySelector('.card__save-button');
const dialog = document.getElementById('save-dialog');
const confirmButton = document.getElementById('confirm-btn');

saveButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.showModal();
});

confirmButton.addEventListener('click', (event) => {
  event.preventDefault();
  dialog.close();
});