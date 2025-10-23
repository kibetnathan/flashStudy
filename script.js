const signIn = document.getElementById('signIn');
const main = document.getElementById('main');
const userForm = document.getElementById('userForm');

function onSubmit(event) {
    event.preventDefault;

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    const user_data = { name, email };
    localStorage.setItem('savedData', JSON.stringify(user_data));
}

userForm.addEventListener('submit', onSubmit);
const user = JSON.parse(localStorage.getItem('savedData'));

if (user != null) {
    signIn.classList.add('hidden');
    main.classList.remove('hidden');
    main.classList.add('flex');
}



