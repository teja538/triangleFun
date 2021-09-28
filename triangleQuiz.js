const quizForm = document.querySelector(".quiz-form"); 
const output = document.querySelector(".output");
const submitButton = document.querySelector("#submit-button");

const correctAns = ["90°","right angled","90°"];

function calculateScore()
{
  var score = 0;
  var index=0;
  var formResults = new FormData(quizForm);
  // console.log(formResults);

  //  for(let entry of formResults.entries())
  // {
  //   console.log(entry); //.entries() => key value pairs
  // } // .values() => only values

  for(let value of formResults.values())
  {
   
    if(value === correctAns[index])
    {
      score = score+1;
    }
    index = index + 1;
  }

  output.innerText = "your score is " + score ;
}


submitButton.addEventListener("click",calculateScore);