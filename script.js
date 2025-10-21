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

let currentSection

window.addEventListener('load', () => currentSection = document.getElementById('mainMenu'));

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
// quizzesButton.addEventListener('click', () => switchView('quizzesSection'));
// audioButton.addEventListener('click', () => switchView('audioSection'));

const subjects = {
    microbiology: [
        "What is the smallest particle of an element that can exist independently?",
        "What are the three fundamental particles of an atom?",
        "Where is most of the mass of an atom concentrated?",
        "What are the charges of protons, neutrons, and electrons?",
        "Which subatomic particle determines the atomic number of an element?",
        "Why is a neutral atom electrically neutral?",
        "Who performed the gold foil experiment?",
        "What particles did Rutherford use in his gold foil experiment?",
        "What was the main observation in Rutherford’s experiment?",
        "What did Rutherford conclude about the atom’s structure?",
        "How did Rutherford describe the motion of electrons?",
        "What was the major flaw in Rutherford’s atomic model?",
        "How does the modern atomic model describe electrons?",
        "What is the size comparison between the nucleus and the atom?",
        "What does the nucleus contain?"

    ]
}

let currentIndex = 0;
let currentSubject = "microbiology";

function loadQuestion() {
    const question = subjects[currentSubject][currentIndex];
  document.getElementById("questionDisplay").textContent = question;
  document.getElementById("progress").textContent = 
    `${currentIndex + 1} / ${subjects[currentSubject].length}`;
}
 function nextQuestion() {
  if (currentIndex < subjects[currentSubject].length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    alert("You've reached the end!");
  }
}
function resetQuestions() {
  currentIndex = 0;
  loadQuestion();
}

window.onload = loadQuestion;
