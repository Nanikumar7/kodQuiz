import React from 'react'
/*importing that quiz.css file */
import { useState } from 'react';
import './quiz.css';
//importing data.jsx
import { data } from '../../data';



export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  //for checking question is last or not
  const [isLastPage, setIsLastPge] = useState(false);
  const [score, setScore] = useState(0);
  const[lock, setLock] = useState(0);

  function checkAnswer(e, ans){
    if(lock===false){
      if(ans===question.ans){
        e.target.classList.add('correct');
        setScore(score+1);
        //siidng one class
      }
      else{
        e.target.classList.add('incorrect');
      }
    }
    setLock(true);
    
  }

  function nextQuestion(){
    setLock(false);
    //not last question
    if(index<data.length-1){
      setIndex(index + 1)
      setQuestion(data[index + 1])
    }
    //last question
    else{
      setIsLastPge(true);
    }
  }
  if(isLastPage ===  true){
    return (
      <h2> Quiz score={score}</h2>
    )
  }
  return (
    <div className='quiz'>
        <h1>Kod Quiz</h1>
        <h3>{question.question}</h3>
        <ul>
            <li onClick={(e)=>checkAnswer(e,'1')}>{question.option1} </li>
            <li onClick={(e)=>checkAnswer(e,'2')}>{question.option2} </li>
            <li onClick={(e)=>checkAnswer(e,'3')}>{question.option3} </li>
            <li  onClick={(e)=>checkAnswer(e,'4')}>{question.option4}</li>
        </ul>
        <button onClick={nextQuestion}>NEXT</button>
        <div>Question {index + 1} of {data.length}</div>
    </div>
  )
}
