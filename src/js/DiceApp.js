/**
 * Class that contains the application window own functionality
 */
function DiceApp(){

  /**
   * Reference to public scope
   * @type {object}
   */
    var _this = this;

    this.template();
    this.dragWindow();
    this.liAdd.addEventListener("click",function(){_this.addDice.call(_this)},false);
    this.liRemove.addEventListener("click",function(){_this.removeDice.call(_this)},false);
    this.liRoll.addEventListener("click",function(){_this.randomIze.call(_this)},false);
    this.close.addEventListener("click",function(){_this.closeWindow.call(_this)},false);
}

/**
 * Audio reference
 * @return {object}
 */
DiceApp.prototype.diceSound = function(){
  var clickSound = new Audio("src/wav/add.wav");
  return clickSound.play();
}
  /**
  * library used to apply movement to the appwindow
  * @return {undefined}
  */
  DiceApp.prototype.dragWindow = function(){
    var drag = new DragnDrop();
    var appWindow = document.getElementsByClassName("dice-window-wrapper");
	  for (var i = 0; i < appWindow.length; i++) {
		    drag.add(appWindow[i], appWindow[i].getElementsByClassName("dice-menubar-wrapper")[0]);
    }
  }

  /**
   * Adding a dice to application window
   *
   * @return {undefined}
   */
  DiceApp.prototype.addDice = function (){
    if(this.ul2.childNodes.length < 40){
      this.ul2.appendChild(DomElem.createElem("li",Dice.rollDice()));
      this.countDices();
      this.diceSound();
    } else alert(" Max antal tärningar");

  }

  /**
   * Remove the last dice from application
   *
   * @return {undefined}
   */
  DiceApp.prototype.removeDice = function(){
    if (this.ul2.childNodes.length > 0) {
      this.ul2.removeChild(this.ul2.lastChild);
      this.countDices();
      this.diceSound();
      }
    else alert(" Inga tärningar att ta bort");
  }

  /**
   * Throw dices
   *
   * @return {undefined}
   */
  DiceApp.prototype.randomIze = function(){
    if(this.ul2.childNodes.length > 0) {
      for (var i = 0; i < this.ul2.childNodes.length; i++) {
        this.ul2.childNodes[i].className = Dice.rollDice();
      }
      this.countDices();
      this.diceSound();
    }
    else alert(" Finns inga tärningar att kasta");

  }

  /**
   * Remove application window
   *
   * @return {undefined}
   */
  DiceApp.prototype.closeWindow = function(){
    this.diceWrapper.parentNode.removeChild(this.diceWrapper);
  }

  /**
   * Calculate score for all dices
   *
   * @return {undefined}
   */
  DiceApp.prototype.countDices = function(){

    var listSum = [];
    var value;
    var sum = 0;
    for (var i = 0; i <this.ul2.childNodes.length; i++) {
    switch (this.ul2.childNodes[i].className) {
      case "dice dice-side-one":
      value = 1;
      break;

      case "dice dice-side-two":
      value = 2;
      break;

      case "dice dice-side-three":
      value = 3;
      break;

      case "dice dice-side-four":
      value = 4;
      break;

      case "dice dice-side-five":
      value = 5;
      break;

      case "dice dice-side-six":
      value = 6;
      break;
      }
    sum = sum + value;
    }
  sum = sum.toString();

  for (var i =  sum.length -1;i>=0; i--) {
    listSum.push(sum[i]);
  }
  this.displaySum(listSum);
}

/**
 * Push score to the DOM
 * @param  {array} value
 * @return {undefined}
 */
 DiceApp.prototype.displaySum = function(points){

  var num = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  var score = [];
  var dif;
  for (var i = 0; i < points.length; i++) {
    if(score.length < 5)
    score.push(num[points[i]]);
  }
    if (score.length < 5){
      dif = 5 - score.length;
      for (var i = 0; i < dif; i++) {
      score.push("zero");
      }
    }
    score.reverse();
    for (var i = 0; i < this.diceToolCountWrap.childNodes.length; i++) {
      this.diceToolCountWrap.childNodes[i].className = score[i];
    }

}

/**
 * Template for application window
 *
 * @return {undefined}
 */
  DiceApp.prototype.template = function(){

    this.pageWrapper = document.getElementById('page-content-wrapper');

    this.diceWrapper = DomElem.createElem("div","dice-window-wrapper");
    this.diceMenu    = DomElem.createElem("div","dice-menubar-wrapper");
    this.close       = DomElem.createElem("div","close")
    this.diceToolWrapper = DomElem.createElem("div","dice-toolbar-wrapper");
    this.ul1      = document.createElement("ul");
    this.liAdd    = DomElem.createElem("li","add");
    this.liRemove = DomElem.createElem("li","remove");
    this.liRoll   = DomElem.createElem("li","roll");
    this.li1      = document.createElement("li");
    this.diceToolCountWrap = DomElem.createElem("ul","dice-toolbar-counter-wrapper");


    this.liZero = DomElem.createElem("li","zero");
    this.liOne = DomElem.createElem("li","one");
    this.liTwo = DomElem.createElem("li","two");
    this.liThree = DomElem.createElem("li","three");
    this.liFour = DomElem.createElem("li","four");
    this.liFive = DomElem.createElem("li","five");
    this.liSix = DomElem.createElem("li","six");
    this.liSeven = DomElem.createElem("li","seven");
    this.liEight = DomElem.createElem("li","eight");
    this.liNine = DomElem.createElem("li","nine");

    this.diceContentWrapper = DomElem.createElem("div","dice-content-wrapper");
    this.ul2 = document.createElement("ul");


    this.pageWrapper.appendChild(this.diceWrapper);
    this.diceWrapper.appendChild(this.diceMenu);
    this.diceMenu.appendChild(this.close);
    this.diceWrapper.appendChild(this.diceToolWrapper);
    this.diceToolWrapper.appendChild(this.ul1);
    this.ul1.appendChild(this.liAdd);
    this.ul1.appendChild(this.liRemove);
    this.ul1.appendChild(this.liRoll);
    this.ul1.appendChild(this.li1);
    this.li1.appendChild(this.diceToolCountWrap);

    for (var i = 0; i < 5; i++) {
      this.diceToolCountWrap.appendChild(DomElem.createElem("li","zero"));
    }

    this.diceWrapper.appendChild(this.diceContentWrapper);
    this.diceContentWrapper.appendChild(this.ul2);
}
