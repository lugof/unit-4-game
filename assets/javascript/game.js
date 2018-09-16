
 
 //variables declared:
  



 //functions declared:



$(document).ready(function() {

    

   var samenum = function(){
        if(randoms.btn1===randoms.btn2 || randoms.btn1===randoms.btn3|| randoms.btn1===randoms.btn4||randoms.btn2===randoms.btn3||randoms.btn2===randoms.btn4||randoms.btn3===randoms.btn4){
            randoms.new();
        }
        
   }
        
       
    
    var randoms ={

         random1: Math.floor((Math.random() * 102) + 19),
         btn1: Math.floor((Math.random() * 12) + 1),
         btn2: Math.floor((Math.random() * 12) + 1),
         btn3: Math.floor((Math.random() * 12) + 1),
         btn4: Math.floor((Math.random() * 12) + 1),
         total: 0,


         new: function(){
                this.random1 = Math.floor((Math.random() * 102) + 19);
                this.btn1= Math.floor((Math.random() * 12) + 1);
                this.btn2= Math.floor((Math.random() * 12) + 1);
                this.btn3= Math.floor((Math.random() * 12) + 1);
                this.btn4= Math.floor((Math.random() * 12) + 1);
                samenum();
                console.log(this.btn1 + " "+ this.btn2 + " " + this.btn3 + " "+ this.btn4);
                $(".score").text(0);
                $(".randomtext").text(randoms.random1);
                this.total=0;
               


         }

    }
    randoms.new();
  
    var wins=0;
    var loses=0;

var checking = function(){
  
        console.log("so far total is "+ randoms.total+ " score is: "+randoms.random1);
        if(randoms.total>randoms.random1){
                alert("You lost!");
                randoms.new();
                randoms.total=0;
                loses++;
                $(".loses").text(loses);


        }
        else if(randoms.total==randoms.random1){
                alert("You won!");
                wins++;
                $(".wins").text(wins);
                randoms.new();

        }

    }


    
    

   
   


    $(".btn1").on("click", function() {
        console.log("button1 is working: "+ randoms.btn1);
        randoms.total += randoms.btn1;
        $(".score").text(randoms.total);
        checking();
       
    }) 

    $(".btn2").on("click", function() {
        console.log("button2 is working: " +randoms.btn2 );
        randoms.total += randoms.btn2;
        $(".score").text(randoms.total);
        checking();
        
    }) 

    $(".btn3").on("click", function() {
        console.log("button3 is working: "+ randoms.btn3);
        randoms.total += randoms.btn3;
        $(".score").text(randoms.total);
        checking();
    }) 

    $(".btn4").on("click", function() {
        console.log("button4 is working: "+randoms.btn4);
        randoms.total += randoms.btn4;
        $(".score").text(randoms.total);
        checking();
       
    }) 




})