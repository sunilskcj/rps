
import React, { useState, useEffect}  from 'react'
import Paper from '../assets/Paper.png'
import Rock from '../assets/Rock.png'
import Scissors from '../assets/Scissors.png'
import Title from '../assets/title.png'
import $ from 'jquery'
import './Main.css'






function Main() {



    let [SCORE  , setScore ]= useState(0)
     
    

        
    function paper() {
        let user_choice = 1 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
       
           


        if (computer_choice === 1){
         $( "#R"  ).css("display", "none")
         $('#X').attr("src",Paper)
         $( ".winner"  ).html("Draw")
        }
        else if(computer_choice === 0){
         $( "#R"  ).css("display", "none")
         $( "#X"  ).attr("src",Rock)
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
    const scissors = () => {
        let user_choice = 2 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
        
        

        if (computer_choice === 2){
            $( "#R"  ).css("display", "none")
            $('#P').attr("src",Scissors)
            $( ".winner"  ).html("Draw")
            
            
           }
        else if (computer_choice === 1){
            $( "#R"  ).css("display", "none") 
            $( ".winner"  ).html("You Win")
            SCORE+=1 // SCORE =SCORE + 1
            setScore(SCORE)
            
           }else if (computer_choice === 0){
            $('#P').attr("src",Rock)
            $( "#R"  ).css("display", "none") 
            $( ".winner"  ).html("You Lose")
           }

        $('input').prop('disabled',true)
    }

    const rock = () => {
        let user_choice = 0 ;
        const computer_choice =  Math.floor((Math.random() * 3)  );
        
        
        if (computer_choice === 0) {
            $( "#R"  ).css("display", "none")
            $('#X').attr("src",Rock)
            $('#P').attr("src",Rock)
            $( ".winner"  ).html("Draw")
        }else if (computer_choice === 2){
            $('#P').attr("src",Rock)
            $('#X').attr("src",Scissors)
            $( "#R"  ).css("display", "none")
            $( ".winner"  ).html("You Win")
            SCORE+=1 // SCORE =SCORE + 1
            setScore(SCORE)
            
        }else{
            $('#P').attr("src",Rock)
            $('#X').attr("src",Paper)
            $( "#R"  ).css("display", "none")
            $( ".winner"  ).html("You Lose")
           }

        $('input').prop('disabled',true)
    };

    const _refreshPage = () => {
        
        $('input').prop('disabled',false)
        $('#P').attr("src",Paper)
        $('#R').attr("src",Rock)
        $('#X').attr("src",Scissors)
        $( "#P"  ).css("display", "flex")
        $( "#R"  ).css("display", "flex")
        $( "#X"  ).css("display", "flex")
      }


    return (
        <div>
        <div className="wrapper">
        <div className="scoreboard"> 
            <div className="title">
                <img src={Title} alt='Title'/>
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
<div class="div1"> <input onClick={paper} type="image" id="P" alt ="image"  src={Paper} />

             </div>
<div class="div2"> <input onClick={ scissors } type="image"  id="X" alt ="image" src={Scissors} /></div>
<div class="div3">  <input onClick={ rock } id="R" type='image'  alt ="image" src={Rock} /> </div>
</div> 
        
      </div>
        </div>
    )
}

export default Main


