const questions = [
    {
        q: "Which one sword belongs to Zoro?",
        a: "Honshu Boshin",
        b: "Wado Ichimonji",
        c: "Ōdenta Mitsuyo",
        d: "Ame no Ohabari",
        answer: "b",
        url:"https://static2.cbrimages.com/wordpress/wp-content/uploads/2019/12/Swords-Wielded-by-Zoro-Featured.jpg",
    },
    {
        q: "The Image belongs to which anime",
        a: "Rôdosu-tô senki",
        b: "Seikai no monshô",
        c: "Tenchi Muyô",
        d: "The Vision of Escaflowne",
        answer: "d",
        url:"./assets/2.jpg",
    },
    {
        q:"What is the curse time period for gradding the Ninetails Tails in Pokemon?",
        a: "1000",
        b: "900",
        c: "10",
        d: "9",
        answer: "a",
        url:"https://cdn.wallpapersafari.com/27/41/eNTJtc.jpg",
    },
    {
        q: "Who voices Vincent Law",
        a: "Koji Yusa",
        b: "Kenichi Suzumura",
        c: "Masaki Terasoma",
        d: "Kisho Taniyama",
        answer: "a",
        url:"https://static.tvtropes.org/pmwiki/pub/images/vincentergo.jpg",
    },
    {
        q: "In Gatsu-no Lion, to which club does Kiriyama belong to?",
        a: "Shogi",
        b: "Shogi-Science",
        c: "Music",
        d: "Culture",
        answer: "b",
        url:"https://pm1.narvii.com/6805/d972aed349739eaa62aba35e665a2e4d2cbe40d9v2_hq.jpg",
    },
    {
        q: "Which was the last missing body part of Hyakkimaru?",
        a: "Hand",
        b: "Leg",
        c: "Ear",
        d: "Eye",
        answer: "d",
        url:"https://pm1.narvii.com/7081/2ef13dea30580a8f567096ea40b96de5ef88dee6r1-1280-720v2_hq.jpg",
    },
    {
        q: "What Anime Is This",
        a: "Black Lagoon",
        b: "Mardock Scramble",
        c: "Ergo Proxy",
        d: "Gilgamesh",
        answer: "b",
        url:"./assets/1.jpg",
    },
    {
        q: "What many years count does Senku keep track of?",
        a: "3600 years",
        b: "3700 years",
        c: "3800 years",
        d: "4000 years",
        answer: "b",
        url:"https://i.pinimg.com/736x/37/47/c6/3747c64f4cfb3d4371bc55123b2529c1.jpg",
    },
    {
        q: "What is the real name of Roberta in Black Lagoon",
        a: "Rebecca",
        b: "Rosarita",
        c: "Shenhua",
        d: "Revy",
        answer: "b",
        url:"https://i.ytimg.com/vi/HjyouKCC5G8/maxresdefault.jpg"
    },
    {
        q: "Where does Gintoki spend his money",
        a: "Pachinko",
        b: "Sweets",
        c: "Paying rent",
        d: "Drinking",
        answer: "a",
        url:"https://honeysanime.com/wp-content/uploads/2017/10/Gintama-Gintoki-crunchyroll-3-560x315.jpg"
    }
];

const quiz = document.getElementById('quiz-container');
const answer_id = document.querySelectorAll('.ans');
const ques = document.getElementById('question');
const a_question = document.getElementById('optiona');
const b_question = document.getElementById('optionb');
const c_question = document.getElementById('optionc');
const d_question = document.getElementById('optiond');
const btn = document.getElementById('sub_btn');
const img_url = document.getElementById("change");
console.log(answer_id);
let score = 0
let currentQuestion = 0
load_question()

function load_question() {
    checkFirst()
    ques.innerHTML = questions[currentQuestion].q
    img_url.src = questions[currentQuestion].url
    a_question.innerHTML = questions[currentQuestion].a
    b_question.innerHTML = questions[currentQuestion].b
    c_question.innerHTML = questions[currentQuestion].c
    d_question.innerHTML = questions[currentQuestion].d

}
function checkFirst() {
    answer_id.forEach(answer_check => answer_check.checked = false)
}

function checkedAnswer(){
    let ans
    answer_id.forEach(answer_check => {
        if(answer_check.checked){
            ans = answer_check.id
        }
    })
    console.log(ans)
    return ans
}

btn.addEventListener('click',() => {
    const ans = checkedAnswer()
    if(ans){
        if(ans === questions[currentQuestion].answer){
            score += 10
        }

    currentQuestion += 1
    if (currentQuestion < questions.length){
        load_question()
    }

    else{
        if(score>60){
            quiz.innerHTML =`
            <h2> Well Done Weebo👌</h2>
            <h3> Your Score ${score}/100 👀👏</h3>
            <button onclick="location.reload()">Play Again</button>
            `
            }
        else{
            quiz.innerHTML =`
            <h2> Watch More Anime Normie👊</h2>
            <h3> Your Score ${score}/100 👀👎</h3>
            <button onclick="location.reload()">Play Again</button>
            `
        }
    }
    }
    else{
        alert("Yo Answer Something,dattebayo👼")
    }
}
)