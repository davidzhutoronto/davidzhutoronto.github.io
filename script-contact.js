let questionRadio = document.querySelector('#question-radio');
let questionText = document.querySelector('#question-text');
let commentRadio = document.querySelector('#comment-radio');
let commentText = document.querySelector('#comment-text');
let orderRadio = document.querySelector('#order-radio');
let orderText = document.querySelector('#order-text');
let orderProblemTextField = document.querySelector('#order-problem-field');
let contactRowNum = document.querySelector('.contact-row-number');

questionRadio.addEventListener('click', function() {
  orderProblemTextField.style.display = 'none';
});
questionText.addEventListener('click', function() {
  orderProblemTextField.style.display = 'none';
});
commentRadio.addEventListener('click', function() {
  orderProblemTextField.style.display = 'none';
});
commentText.addEventListener('click', function() {
  orderProblemTextField.style.display = 'none';
});
orderRadio.addEventListener('click', function() {
  orderProblemTextField.style.display = 'block';
  contactRowNum.style.display = 'block';
});
orderText.addEventListener('click', function() {
  orderProblemTextField.style.display = 'block';
  contactRowNum.style.display = 'block';
});
