/**
 * initialize the application
 * @type {Object}
 */
Main = {

    /**
     * creates a new instance of the application window.
     * @return {undefined}
     */
    init: function(){
      var addWindow = document.getElementById("icon-dice");
      addWindow.addEventListener("click",function(){new DiceApp();},false);
    }
}
      
/**
 * Waiting for init to run before the window is loaded.
 */
window.addEventListener("load",Main.init);
