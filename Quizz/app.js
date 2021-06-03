const form = document.querySelector('.form-quizz');
let resultTab = [];
const reponses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔️', '✨', '👀', '😭', '👎'];
let resultTitle = document.querySelector('.resultats h2');
let resultNote = document.querySelector('.note');
let resultAide = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
let veriftab = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Récuperer les resultats
    for (i = 1; i < 6; i++) {
        resultTab.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    console.log(resultTab)

    // Appelé la fonction pour vérifier les resultats
    verifResult(resultTab);
    // reinitialiser le tableau
    resultTab = [];
})

function verifResult(tabsValue) {
    for (i = 0; i < 5; i++) {
        if (tabsValue[i] === reponses[i]) {
            veriftab.push(true);

        } else {
            veriftab.push(false);
        }
    }

    afficheResult(veriftab);
    couleursFonction(veriftab);
    veriftab = [];

}

function afficheResult(tabCheck) {

    const nbDeFautes = tabCheck.filter(el => el !== true).length;

    switch (nbDeFautes) {
        case 0:
            resultTitle.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`
            resultAide.innerText = ''
            resultNote.innerText = '5/5'
            break;
        case 1:
            resultTitle.innerText = `✨ Vous y êtes presque ! ✨`
            resultAide.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            resultNote.innerText = '4/5'
            break;
        case 2:
            resultTitle.innerText = `✨ Encore un effort ... 👀`
            resultAide.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '3/5'
            break;
        case 3:
            resultTitle.innerText = `👀 Il reste quelques erreurs. 😭`
            resultAide.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '2/5'
            break;
        case 4:
            resultTitle.innerText = `😭 Peux mieux faire ! 😭`
            resultAide.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '1/5'
            break;
        case 5:
            resultTitle.innerText = `👎 Peux mieux faire ! 👎`
            resultAide.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            resultNote.innerText = '0/5'
            break;

        default:
            'Wops, cas innatendu.';
    }

}

function couleursFonction(tabValBool) {
    for (let j = 0; j < tabValBool.length; j++) {

        if (tabValBool[j] === true) {
            toutesLesQuestions[j].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[j].style.background = '#ffb8b8';
            toutesLesQuestions[j].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[j].classList.remove('echec');
            }, 500)
        }

    }
}

toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})