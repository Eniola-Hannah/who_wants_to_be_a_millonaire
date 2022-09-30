var AllQuestions = [
    {
        questions: "What is the primary organ of Taste",
        options: ["Ears","Eyes","Tongue","Nose"],
        realAnswer: "Tongue"
    },
    {
        questions: "Which of this is a popular & common social media platform",
        options: ["Legbook","Handbok","Facebook","Feetbook"],
        realAnswer: "Facebook"
    },
    {
        questions: "A situation where a boat overturns in water is called what?",
        options: ["Clothsize","Capsize","Shoesize","Chainsize"],
        realAnswer: "Capsize"
    },
    {
        questions: "cynology is the study of what",
        options: ["bees","ants","Dogs","cockroaches"],
        realAnswer: "Dogs"
    },
    {
        questions: "Serengeti National Park is in which Country",
        options: ["Niger","Kenta","Mali","Tanzania"],
        realAnswer: "Tanzania"
    },
    {
        questions: "In what year did Ghana gain her Independence",
        options: ["1956","1957","1958","1959"],
        realAnswer: "1957"
    },
    {
        questions: "Which of these is a Nigerian football club based in owerri, Imo state",
        options: ["Liverland FC","Brainland FC","Heartland FC","KidneyLand FC"],
        realAnswer: "Heartland FC"
    },
    {
        questions: "What is whooping cough also known as",
        options: ["Tuberculosis","Pertussis","Diphteria","Tetanus"],
        realAnswer: "Pertussis"
    },
    {
        questions: "Legs and Arms are also Known as what",
        options: ["Torso","Diaphgram","Trachea","Limbs"],
        realAnswer: "Limbs"
    },
    {
        questions: "which of these is not written by shakespare",
        options: ["Hamlet","Othello","Richard III","Tartuffe"],
        realAnswer: "Tartuffe"
    },
    {
        questions: "Who is the greek God of War",
        options: ["Zeus","Ares","Hermes","Artemis"],
        realAnswer: "Ares"
    },
    {
        questions: "According to scientist, what cause the extinction of dinosaurs",
        options: ["An asteroid","They were hunted","Water Scarcity","Fight challenge"],
        realAnswer: "An asteroid"
    },
    {
        questions: "What is the Capital of Greece",
        options: ["Thessaloniki"," Athens ","Patras","Rhodes"],
        realAnswer: "Athens"
    },
    {
        questions: "What group of Animals have young that are carried in their mother's pouch",
        options: ["Amphibians","Reptiles","Vertebrate","Marsupials"],
        realAnswer: "Marsupials"
    },
    {
        questions: "The Halifax Stanfield International Airport is located in which country",
        options: ["Australia","New zealand","mexico","Canada"],
        realAnswer: "Canada"
    },
]
nowPlaying = JSON.parse(localStorage.getItem("currentPlayer"))
pageMarquee.innerHTML = `WELCOME ${nowPlaying.lastname} ${nowPlaying.firstname} TO 'WHO WANTS TO BE A MILLONAIRE 2022 EDITION', WE ARE ROOTING FOR YOU.... BEST OF LUCK!!!!!!`


const startGame=()=>{
    window.location.href ="game.html"
}

var i = 0
const displayQuestion =()=>{
    for (let index = 0; index < AllQuestions.length; index++) {
        // span[index].style.background = 'none';
    }

    loadQuestion.innerHTML = AllQuestions[i].questions
    option1.innerHTML = AllQuestions[i].options[0]
    option2.innerHTML = AllQuestions[i].options[1]
    option3.innerHTML = AllQuestions[i].options[2]
    option4.innerHTML = AllQuestions[i].options[3]
}
