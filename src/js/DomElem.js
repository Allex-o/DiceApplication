/**
 * Object that is associated with the DOM
 * @type {Object}
 */
DomElem = {

  /**
   * Used to create an element with a desired className
   * @param  {string} type
   * @param  {string} value
   * @return {object}
   */
  createElem: function(type,value){
    var name = document.createElement(type);
    name.className = value;
    return name;
  }
  }
