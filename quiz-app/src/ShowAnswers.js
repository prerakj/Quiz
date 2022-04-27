import React, { useState } from 'react'

export default function ShowAnswers(props) {
    const {questionArr,answerArr,enteredAnsArr}=props;
    var score=0;
  return (
    <div>
        {questionArr.map((item,index)=>{
            console.log(questionArr[index],answerArr[index],enteredAnsArr[index])
            if(parseInt(answerArr[index])===parseInt(enteredAnsArr[index])){
                score=score+1;
                return <h4 key={index}>{`${item} = ${answerArr[index]}`}</h4>
            }else{
                return <h4 key={index} style={{color:'red'}}>{`${item} = ${answerArr[index]}`}</h4>
            }
            
        })}
        <h3>Score : {score}/{questionArr.length}</h3>
    </div>
  )
}
