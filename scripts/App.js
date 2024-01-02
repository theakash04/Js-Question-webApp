let knew = document.querySelector("#knew");
let learnt = document.querySelector("#learnt");
let skipped = document.querySelector("#skipped");
let resetbtn = document.querySelector("#reset");
let reveal = document.querySelector("#reveal");
let hide = document.querySelector("#hide");

let bar = document.querySelector(".bar-section");
let barW = document.querySelector(".bar");

let question = document.querySelector("#question-t");
let answer = document.querySelector("#answer-t");

const knewbtn = document.querySelector("#Knewbtn");
const learnbtn = document.querySelector("#learnbtn");
const skipbtn = document.querySelector("#skipbtn");

let Qknew = 0;
let Qskipped = 0;
let Qlearn = 0;
const Qlength = questions.length;
let Qnum = 0;
let TotalQ = 0;

const questionfnc = () => {
  question.innerHTML = `${questions[Qnum].question}`;
  answer.innerHTML = `${questions[Qnum].answer}`;

  reveal.addEventListener("click", () => {
    answer.parentElement.setAttribute("style", "display: flex");
    question.parentElement.setAttribute("style", "display: none");
  });

  hide.addEventListener("click", () => {
    answer.parentElement.setAttribute("style", "display: none");
    question.parentElement.setAttribute("style", "display: flex");
  });
  progrssBar();
};

const nextQs = () => {
  knewbtn.addEventListener("click", () => {
    Qknew++;
    Qnum++;
    TotalQfnc();
    Qnum === Qlength ? finish() : questionfnc();
  });

  learnbtn.addEventListener("click", () => {
    Qlearn++;
    Qnum++;
    TotalQfnc();
    Qnum === Qlength ? finish() : questionfnc();
  });

  skipbtn.addEventListener("click", () => {
    Qskipped++;
    Qnum++;
    TotalQfnc();
    Qnum === Qlength ? finish() : questionfnc();
  });
};

const progrssBar = () => {
  knew.innerHTML = `${Qknew} Questions`;
  learnt.innerHTML = `${Qlearn} Questions`;
  skipped.innerHTML = `${Qskipped} Questions`;
  bar.children[1].innerHTML = `${TotalQ}/${Qlength}`;
  barW.setAttribute('style', `width: ${(TotalQ / Qlength) * 100}%`);
};

const TotalQfnc = () => {
  if (TotalQ !== Qlength) {
    TotalQ++;
  }
};


let btns = document.querySelector('.btns');


const finish = () => {
  progrssBar();
  question.parentElement.setAttribute("style", "display: none");
  answer.parentElement.setAttribute("style", "display: none");

  const newelem = document.querySelector('.questions-section');


  btns.setAttribute('style', 'display: none')

  let finish = document.createElement('div');
  finish.className= 'results';
  let span = document.createElement('span');
  span.textContent = 'Question Finished'
  finish.appendChild(span);
  newelem.appendChild(finish);
  

  let btn = document.createElement('button');
  btn.textContent = 'Restart'
  finish.appendChild(btn);

  if(Qknew === Qlength){
    let gif = document.createElement('img');
    gif.setAttribute('src', 'media/6ob.gif');
    newelem.appendChild(gif);

    setTimeout(()=>{
      gif.remove();
    },1500);
  };
  


  btn.addEventListener('click', ()=>{
    finish.remove();
    restart();
    progrssBar();
    questionfnc();
  })

  resetbtn.addEventListener('click', ()=>{
    finish.remove();
  })
};



const restart = () =>{
  Qknew = 0;
  Qskipped = 0;
  Qlearn = 0;
  Qnum = 0;
  TotalQ = 0;
  question.parentElement.setAttribute("style", "display: flex");
  btns.setAttribute('style', 'display: flex')
  
  barW.setAttribute("style", `width: 0%`);
}


resetbtn.addEventListener("click", () => {
  restart();
  progrssBar();
  questionfnc();
});


setTimeout(()=>{
  alert("Don't refresh the page in middle \nThe data will be lost!")
},5000)


questionfnc();
nextQs();
progrssBar();


