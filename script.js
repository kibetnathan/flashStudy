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

const flashButton = document.getElementById('flashcardsButton');
const mainButton = document.getElementById('mainButton');
const quizzesButton = document.getElementById('quizzesButton');
const audioButton = document.getElementById('audioButton');

let currentSection = document.getElementById('mainMenu');

function switchView(sectionId) {
    const newSection = document.getElementById(sectionId);

    if (newSection === currentSection) {
        return;
    }
    
    currentSection.classList.remove('flex');
    currentSection.classList.remove('lg:grid');
    currentSection.classList.add('hidden');
    
    newSection.classList.remove('hidden');
    newSection.classList.add('flex');
    newSection.classList.add('lg:grid');
    
    currentSection = newSection;
}

mainButton.addEventListener('click', () => switchView('mainMenu'));
flashButton.addEventListener('click', () => switchView('flashcards'));
quizzesButton.addEventListener('click', () => switchView('quizzesSection'));
audioButton.addEventListener('click', () => switchView('audioSection'));