$(function() {
    
    $(".stone").draggable();
    
    
    
});



 var PButtonO = document.getElementById("aller");
var PButtonT = document.getElementById("gehen");



    

    
    
   


    
     let pile = document.getElementsByClassName("stone")
     
    
     
    let rotation = document.getElementById("pass");
     let NumberOfTakenStones = 0;
     let counter = 0;
    
     
     let foo = function(){
         
         
         pile[0].remove();
         NumberOfTakenStones++
         counter++
         
          alert("total number of stones taken =" + NumberOfTakenStones);
         alert(counter);
         
         if(counter === 1){
            
            
            rotation.style.display = "inline";
            }
         if(counter === 3){
             
             gameState();
             
                     rotation.style.display = "none";    
                        }
         
        if(NumberOfTakenStones === 10 && turn === "player1"){
            
            alert("player 1, you lose!")
            
            }else if(NumberOfTakenStones === 10 && turn === "player2"){
         
          alert("player 2, you lose!")
     }
     }
      
     
     
     let turn = "player1";
     
     let gameState = function(){
         counter = 0;
         
         
          rotation.style.display = "none"; 
         if(turn === "player1"){
             
             
             
             
             alert("player two's turn");
             turn = "player2";
             PButtonO.style.display = "none";
              PButtonT.style.display = "block";
             
             
         }else if(turn === "player2"){
             
             
             
              
             alert("player one's turn");
             turn = "player1";
              PButtonT.style.display = "none";
              PButtonO.style.display = "block";
            
             
         }
         
     }
     
     
     
     

    
         
         
     
     
    
    
