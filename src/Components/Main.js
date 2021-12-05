
import React, { useState, useEffect}  from 'react'

import $ from 'jquery'
import './Main.css'






function Main() {



    let [SCORE  , setScore ]= useState(0)
     
    

        
    function paper() {
        let user_choice = 1 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
       
           


        if (computer_choice === 1){
         $( "#R"  ).css("display", "none")
         $('#X').attr("src","/assets/Paper.png")
         $( ".winner"  ).html("Draw")
        }
        else if(computer_choice === 0){
         $( "#X"  ).css("display", "none")
         $( ".winner"  ).html("You Win")
             SCORE+=1 // SCORE =SCORE + 1
             setScore(SCORE)  
             
        }
        else if(computer_choice === 2){
         $( "#R"  ).css("display", "none") 
         $( ".winner"  ).html("You Lose")
        }
        $('input').prop('disabled',true)
  
    }
    const Scissors = () => {
        let user_choice = 2 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
        
        

        if (computer_choice === 2){
            $( "#R"  ).css("display", "none")
            $('#P').attr("src","/assets/Scissors.png")
            $( ".winner"  ).html("Draw")
            
            
           }
        else if (computer_choice === 1){
            $( "#R"  ).css("display", "none") 
            $( ".winner"  ).html("You Win")
            SCORE+=1 // SCORE =SCORE + 1
            setScore(SCORE)
            
           }else if (computer_choice === 0){
            $('#P').attr("src","/assets/Rock.png")
            $( "#R"  ).css("display", "none") 
            $( ".winner"  ).html("You Lose")
           }

        $('input').prop('disabled',true)
    }

    const Rock = () => {
        let user_choice = 0 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
        
        
        if (computer_choice === 0) {
            $( "#P"  ).css("display", "none")
            $('#X').attr("src","/assets/Rock.png")
            $( ".winner"  ).html("Draw")
        }else if (computer_choice === 2){
            $('#P').attr("src","/assets/Rock.png")
            $('#X').attr("src","/assets/Scissors.png")
            $( "#R"  ).css("display", "none")
            $( ".winner"  ).html("You Win")
            SCORE+=1 // SCORE =SCORE + 1
            setScore(SCORE)
            
        }else{
            $('#P').attr("src","/assets/Rock.png")
            $('#X').attr("src","/assets/Paper.png")
            $( "#R"  ).css("display", "none")
            $( ".winner"  ).html("You Lose")
           }

        $('input').prop('disabled',true)
    };

    const _refreshPage = () => {
        
        $('input').prop('disabled',false)
        $('#P').attr("src","/assets/Paper.png")
        $('#R').attr("src","/assets/Rock.png")
        $('#X').attr("src","/assets/Scissors.png")
        $( "#P"  ).css("display", "flex")
        $( "#R"  ).css("display", "flex")
        $( "#X"  ).css("display", "flex")
      }


    return (
        <div>
        <div className="wrapper">
        <div className="scoreboard"> 
            <div className="title">
                <img src='/assets/title.png' alt='tit'/>
            </div>
            <div className="score">
                
                <p>SCORE </p>
                
                <h1> {SCORE}</h1>

            </div>
        </div>
        <div className=' div4 '> 

            <h1 className="winner">You Win</h1>
           
            <button className='BUTTON_ZWE' onClick={_refreshPage}>Play Again</button> 
        </div>
        <div class="parent">
<div class="div1"> <input onClick={paper} type="image" id="P" alt ="image"  src="/assets/Paper.png" />
             </div>
<div class="div2"> <input onClick={ Scissors } type="image"  id="X" alt ="image" src="/assets/Scissors.png" /></div>
<div class="div3">  <input onClick={ Rock } id="R" type='image'  alt ="image" src="/assets/Rock.png" /> </div>
</div> 
        
      </div>
        </div>
    )
}

export default Main


