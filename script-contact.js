const arrNones = ['#question-radio', '#question-text', '#comment-radio', '#comment-text'];
const arrDisplays = ['#order-radio', '#order-text'];
let contactRowNum = document.querySelector('.contact-row-number');
let orderNumberInput = document.querySelector('#order-problem-field #order-number-radio');

arrNones.map(arrNone => {
  document.querySelector(arrNone).addEventListener('click', function() {
    contactRowNum.style.display = 'none';
    orderNumberInput.removeAttribute('required');
  });
});

arrDisplays.map(arrDisplay => {
  document.querySelector(arrDisplay).addEventListener('click', function() {
    contactRowNum.style.display = 'block';
    orderNumberInput.setAttribute('required', 'required');
  });
});
