// Открытие формы по клику на кнопку
document.getElementById('openFormButton').addEventListener('click', function() {
  document.getElementById('feedbackForm').style.display = 'block';
  history.pushState({ formOpen: true }, '', '/feedback-form');
});

// Закрытие формы при нажатии кнопки "Назад"
window.onpopstate = function(event) {
  if (event.state && event.state.formOpen) {
    document.getElementById('feedbackForm').style.display = 'none';
  }
};

// Отправка данных формы без перезагрузки страницы
$('#feedbackForm').submit(function(event) {
  event.preventDefault();
  var formData = {
    fullName: $('#fullName').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    organization: $('#organization').val(),
    message: $('#message').val()
  };
  
  // Отправка данных на сервер с помощью jQuery
  $.post('/submit-feedback', formData)
    .done(function() {
      $('#successMessage').show();
      clearForm();
    })
    .fail(function() {
      $('#errorMessage').show();
    });
});

// Сохранение и восстановление значений формы с помощью LocalStorage
$(document).ready(function() {
  var savedFormData = JSON.parse(localStorage.getItem('feedbackFormData'));
  if (savedFormData) {
    $('#fullName').val(savedFormData.fullName);
    $('#email').val(savedFormData.email);
    $('#phone').val(savedFormData.phone);
    $('#organization').val(savedFormData.organization);
    $('#message').val(savedFormData.message);
  }
});

function clearForm() {
  $('#fullName, #email, #phone, #organization, #message').val('');
  localStorage.removeItem('feedbackFormData');
}

$('#fullName, #email, #phone, #organization, #message').on('input', function() {
  var formData = {
    fullName: $('#fullName').val(),
    email: $('#email').val(),
    phone: $('#phone').val(),
    organization: $('#organization').val(),
    message: $('#message').val()
  };
  localStorage.setItem('feedbackFormData', JSON.stringify(formData));
});