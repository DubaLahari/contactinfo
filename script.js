
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('contact-form');
    const nameInput = form.name;
    const emailInput = form.email;
    const phoneInput = form.phone;
    const subjectInput = form.subject;
    const messageInput = form.message;

    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorPhone = document.getElementById('error-phone');
    const errorSubject = document.getElementById('error-subject');
    const errorMessage = document.getElementById('error-message');
    const formSuccess = document.getElementById('form-success');

    function validateEmail(email) {
    
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }

    function validatePhone(phone) {
      if (phone.trim() === "") return true; 
      const re = /^\+?[0-9\s\-\(\)]{7,15}$/;
      return re.test(phone);
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      errorName.textContent = '';
      errorEmail.textContent = '';
      errorPhone.textContent = '';
      errorSubject.textContent = '';
      errorMessage.textContent = '';
      formSuccess.textContent = '';

      let valid = true;

      if (!nameInput.value.trim()) {
        errorName.textContent = 'Full Name is required.';
        valid = false;
      } else if (nameInput.value.trim().length < 3) {
        errorName.textContent = 'Full Name must be at least 3 characters.';
        valid = false;
      }

      if (!emailInput.value.trim()) {
        errorEmail.textContent = 'Email Address is required.';
        valid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        errorEmail.textContent = 'Please enter a valid email address.';
        valid = false;
      }

      if (phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
        errorPhone.textContent = 'Please enter a valid phone number.';
        valid = false;
      }

      if (!subjectInput.value.trim()) {
        errorSubject.textContent = 'Subject is required.';
        valid = false;
      } else if (subjectInput.value.trim().length < 5) {
        errorSubject.textContent = 'Subject must be at least 5 characters.';
        valid = false;
      }

      if (!messageInput.value.trim()) {
        errorMessage.textContent = 'Message is required.';
        valid = false;
      } else if (messageInput.value.trim().length < 10) {
        errorMessage.textContent = 'Message must be at least 10 characters.';
        valid = false;
      }

      if (valid) {
      
        formSuccess.textContent = 'Thank you for contacting us! We will get back to you soon.';
        form.reset();
      }
    });

   
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const todoError = document.getElementById('todo-error');

    function createTaskElement(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;

      
      const actions = document.createElement('div');
      actions.className = 'todo-actions';

     
      const toggleBtn = document.createElement('button');
      toggleBtn.title = 'Mark as Completed';
      toggleBtn.setAttribute('aria-label', 'Mark task as completed');
      toggleBtn.innerHTML = '✓';
      toggleBtn.onclick = () => {
        li.classList.toggle('completed');
      };

   
      const removeBtn = document.createElement('button');
      removeBtn.title = 'Remove Task';
      removeBtn.setAttribute('aria-label', 'Remove task');
      removeBtn.innerHTML = '✗';
      removeBtn.onclick = () => {
        todoList.removeChild(li);
      };

      actions.appendChild(toggleBtn);
      actions.appendChild(removeBtn);

      li.appendChild(actions);

      return li;
    }

    todoForm.addEventListener('submit', e => {
      e.preventDefault();
      todoError.textContent = '';

      const taskText = todoInput.value.trim();

      if (!taskText) {
        todoError.textContent = 'Please enter a task.';
        return;
      }
      if (taskText.length < 2) {
        todoError.textContent = 'Task must be at least 2 characters.';
        return;
      }

      const taskItem = createTaskElement(taskText);
      todoList.appendChild(taskItem);
      todoInput.value = '';
      todoInput.focus();
    });
  });
