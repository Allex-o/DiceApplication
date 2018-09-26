/**
 * Represents number of the dice
 * @type {Object}
 */
Dice = {

  /**
   * Get a random number, used for throw dices
   * @return {string}
   */
  rollDice: function(){

     var diceSide = Math.ceil(Math.random() * 6);
     var x;
     switch (diceSide) {
       case 1:
        x= "dice dice-side-one";
        break;
       case 2:
        x= "dice dice-side-two";
        break;
       case 3:
        x= "dice dice-side-three";
        break;
       case 4:
        x= "dice dice-side-four";
        break;
       case 5:
        x= "dice dice-side-five";
        break;
       case 6:
        x= "dice dice-side-six";
        break;
     }
     return x;
  }

}
