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


const subjectSets = {
  microbiology: {
    atomicStructure: {
      Q1: [
        "What is the smallest particle of an element that can exist independently?",
        "An atom."
      ],
      Q2: [
        "What are the three fundamental particles of an atom?",
        "Protons, neutrons, and electrons."
      ],
      Q3: [
        "Where is most of the mass of an atom concentrated?",
        "In the nucleus."
      ],
      Q4: [
        "What are the charges of protons, neutrons, and electrons?",
        "Proton: +1, Neutron: 0, Electron: -1."
      ],
      Q5: [
        "Why is a neutral atom electrically neutral?",
        "Because it has equal numbers of protons and electrons."
      ],
      Q6: [
        "Who performed the gold foil experiment?",
        "Ernest Rutherford."
      ],
      Q7: [
        "What particles did Rutherford use in his gold foil experiment?",
        "Alpha particles (helium nuclei)."
      ],
      Q8: [
        "What was the main observation in Rutherford’s experiment?",
        "Most alpha particles passed straight through the foil, but a few were deflected or bounced back."
      ]
    },
    chromosomeStructure: {
      Q1: [
        "What is the main structural difference between euchromatin and heterochromatin?",
        "Euchromatin is less condensed and transcriptionally active, while heterochromatin is tightly packed and inactive."
      ],
      Q2: [
        "What is the centromere and its function?",
        "The centromere is the primary constriction point on a chromosome that holds sister chromatids together and attaches to spindle fibers during division."
      ],
      Q3: [
        "What is a nucleosome?",
        "A nucleosome is the basic unit of DNA packing, made of DNA wrapped twice around a histone protein core."
      ],
      Q4: [
        "What are histones, and what is their role?",
        "Histones are positively charged proteins that bind to negatively charged DNA, helping it coil and compact into chromatin."
      ],
      Q5: [
        "What is satellite DNA, and where is it found?",
        "Satellite DNA consists of repetitive sequences found mainly in the heterochromatin near centromeres."
      ],
      Q6: [
        "What determines the shape of a chromosome?",
        "The position of the centromere determines whether a chromosome is metacentric, acrocentric, sub-metacentric, or telocentric."
      ],
      Q7: [
        "What is a linkage group?",
        "All genes located on a single chromosome form a linkage group and tend to be inherited together unless crossing over occurs."
      ],
      Q8: [
        "What happens to chromatin during interphase vs. mitosis?",
        "During interphase, chromatin is extended and tangled; during mitosis, it condenses into visible chromosomes."
      ]
    }
  },
  // german: {
  //   deck1: {},
  //   deck2: {}
  // }
}
