/*var flowRate = 0; //initial flow rate
var pipeHeight = document.getElementById("pipe").clientHeight;

setInterval(function() {
  var waterHeight = flowRate / 100 * pipeHeight;
  document.getElementById("pipe").style.backgroundPositionY = waterHeight + "px";
}, 100);
*/



function uflow(){
	
	
	setTimeout(function(){
		   document.getElementById('pipe2').classList.add("uflow");
	   },2000);
	   
	    /* chiller pipe water 13 wpuflow */
	   setTimeout(function(){
		   document.getElementById('wpipe13').classList.add("wpu13flow");
	   },500); 
	   
	   /* chiller pipe water 14 wpuflow */
	    setTimeout(function(){
		   document.getElementById('wpipe14').classList.add("wpu14flow");
	   },5000);
	   
	    /* pipe water 15 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe15').classList.add("wpu15flow");
	   },8500);
	   
	     /* pipe water 17 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe17').classList.add("wpu17flow");
	   },12500);
	   
	     /* pipe water 18 wpuflow */
	   setTimeout(function(){
		   document.getElementById('wpipe18').classList.add("wpu18flow");
	   },15500);
	   
	    /* pipe water 16 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe16').classList.add("wpu16flow");
	   },20000);
	   
	    
	   
	        /* pipe water 19 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe19').classList.add("wpu19flow");
	   },24000);
	   
	     /* pipe water 21 Dflow */
	   setTimeout(function(){
		   document.getElementById('wpipe21').classList.add("wpu21flow");
	   },37000);
	   
	       /* pipe water 20 Dflow */
	   setTimeout(function(){
		   document.getElementById('wpipe20').classList.add("wpu20flow");
	   },41000);
	   
	   /* pipe water 1 Dflow */
	    setTimeout(function(){
		   document.getElementById('wpipe1').classList.add("wpu1flow");
	   },44600);
	   
	     /* pipe water 4 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe4').classList.add("wpu4flow");
	   },48500);
	   
	    /* pipe water 2 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe2').classList.add("wpu2flow");
	   },54000);
	   
	       /* pipe water 5 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe5').classList.add("wpu5flow");
	   },58000);
	    /* pipe water 7 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe7').classList.add("wpu7flow");
	   },62000);
	    /* pipe water 3 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe3').classList.add("wpu3flow");
	   },62000);
	   
	   
	  
	   
	   setTimeout(function(){
	       document.getElementById('drop2').classList.add("dflow");
	  },82000);
	  
	     setTimeout(function(){
		   document.getElementById('basin3').classList.add("lbflow");
	   },86000);
	   
	   
	      /* water chiller basin */
	    setTimeout(function(){
		   document.getElementById('basin4').classList.add("chflow");
	   },30000);
	   
	   
	   
	
	    /* pipe water 6 wpu1flow 
	   setTimeout(function(){
		   document.getElementById('wpipe6').classList.add("wpu6flow");
	   },43500); */
	    /* pipe water 7 wpu1flow */
	   
	   setTimeout(function(){
	       document.getElementById('drop').classList.add("dflow");
	  },67000);
	setTimeout(function(){
	       document.getElementById('drop1').classList.add("dflow");
	  },26500);
	
	 setTimeout(function(){
		   document.getElementById('basin').classList.add("bflow");
	   },32000);
	   
	
	   setTimeout(function(){
		   document.getElementById('basin2').classList.add("lbflow");
	   },73000);
	   
	  
	    setTimeout(function(){
		   document.getElementById('vapor').classList.add("tgflow");
	   },32000);
	   
	   
	   
	   
	      /* pipe water 6 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe6').classList.add("wpu6flow");
	   },55000);
	 
	     /* pipe water 8 Dflow */
	   setTimeout(function(){
		   document.getElementById('wpipe8').classList.add("wpu8flow");
	   },58500);
	   
	    /* pipe water 9 Dflow */
	   setTimeout(function(){
		   document.getElementById('wpipe9').classList.add("wpu9flow");
	   },62000);
	   
	       /* pipe water 10 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe10').classList.add("wpu10flow");
	   },66000);
	   
	      /* pipe water 11 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe11').classList.add("wpu11flow");
	   },69500);
	   
	     /* pipe water 22 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe22').classList.add("wpu22flow");
	   },73500);
	   
	       /* pipe water 12 wpu1flow */
	    setTimeout(function(){
		   document.getElementById('wpipe12').classList.add("wpu12flow");
	   },78500);
	   
	    
	    /* pipe water 23 wpu1flow */
	   setTimeout(function(){
		   document.getElementById('wpipe23').classList.add("wpu23flow");
	   },78500);
	   
	     setTimeout(function(){   
	 moveUp2();  
	 },9000);
	 
	      setTimeout(function(){   
	 moveUp3();  
	 },9000);
}	

function tankflow(){
	
	   /*
	   
	   setTimeout(function(){
		   document.getElementById('drop').classList.add("dflowstop");
	   },80000);
	   setTimeout(function(){
		   document.getElementById('drop1').classList.add("dflowstop");
	   },80000);
	   
	   setTimeout(function(){
		   document.getElementById('tank').classList.add("cflowstop");
	   },22000);
	   
	 
	  
	  
	   
	  
	   
	     /* pipe water stop wpu1flow 
	    setTimeout(function(){
		   document.getElementById('wpipe7').classList.remove("wpu7flow");
	   },85000);
	 
	   
	    setTimeout(function(){
		   document.getElementById('wpipe3').classList.remove("wpu3flow");
	   },87000);
	    setTimeout(function(){
		   document.getElementById('wpipe2').classList.remove("wpu2flow");
	   },88000);
	   setTimeout(function(){
		   document.getElementById('wpipe').classList.remove("wpuflow");
	   },89000);
	   
	    setTimeout(function(){
		   document.getElementById('wpipe12').classList.remove("wpu12flow");
	   },90000);
	     setTimeout(function(){
		   document.getElementById('wpipe11').classList.remove("wpu11flow");
	   },91000);
	      setTimeout(function(){
		   document.getElementById('wpipe10').classList.remove("wpu10flow");
	   },92000);
	      setTimeout(function(){
		   document.getElementById('wpipe9').classList.remove("wpu9flow");
	   },93000);
	     setTimeout(function(){
		   document.getElementById('wpipe8').classList.remove("wpu8flow");
	   },94000);
	   
	   /*indicator time out*/
	   
	   
	 
	   
	  
	   
}

/****indicator 2*/

function moveUp() {
  let rectangle = document.getElementById("rectangle");
  let position = 36;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 39) {
      clearInterval(id);
    } else {
      position++;
      rectangle.style.bottom = position + "%";
    }
  }
}

function moveDown() {
  let rectangle = document.getElementById("rectangle");
  let position = 81;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 78) {
      clearInterval(id);
    } else {
      position--;
      rectangle.style.bottom = position + "%";
    }
  }
}

/****indicator 2*/

function moveUp2() {
  let rectangle = document.getElementById("rectangle2");
  let position = 69;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 71) {
      clearInterval(id);
    } else {
      position++;
      rectangle.style.bottom = position + "%";
    }
  }
}

function moveDown2() {
  let rectangle = document.getElementById("rectangle2");
  let position = 71;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 68) {
      clearInterval(id);
    } else {
      position--;
      rectangle.style.bottom = position + "%";
    }
  }
}


/****indicator 3*/

function moveUp3() {
  let rectangle = document.getElementById("rectangle3");
  let position = 19;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 23) {
      clearInterval(id);
    } else {
      position++;
      rectangle.style.bottom = position + "%";
    }
  }
}

function moveDown3() {
  let rectangle = document.getElementById("rectangle3");
  let position = 23;
  let id = setInterval(frame, 50);
  
  function frame() {
    if (position == 19) {
      clearInterval(id);
    } else {
      position--;
      rectangle.style.bottom = position + "%";
    }
  }
}












