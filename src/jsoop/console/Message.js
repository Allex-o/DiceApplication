//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @version    1.6.0
 *  @copyright  Copyright (c) 2012-2016.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Jan 11, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>
 *              Emil Johansson <emil.johansson@lnu.se>
 */
com.vectorpanic.jsoop.console.Message = (function(color, prefix) {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    // Public properties
    //----------------------------------------------------------------------

    /**
     *  ...
     *
     *  @type {Integer}
     */
    this.id = 0;
    
    /**
     *  ...
     *
     *  @type {String}
     */
    this.color = color || "#FFFFFF";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.prefix = prefix || "";

    //----------------------------------------------------------------------
    // Internal properties
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    this.m_text = "";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.m_title = "";

    //----------------------------------------------------------------------
    //  Constructor call
    //----------------------------------------------------------------------
    
    /**
     *  ...
     */
    com.vectorpanic.jsoop.dom.Element.call(this, "li");
});

//--------------------------------------------------------------------------
//  Inheritance
//--------------------------------------------------------------------------

com.vectorpanic.jsoop.console.Message.prototype = new com.vectorpanic.jsoop.dom.Element();
com.vectorpanic.jsoop.console.Message.prototype.constructor = com.vectorpanic.jsoop.console.Message;

//--------------------------------------------------------------------------
//  Public static getter and setter methods
//--------------------------------------------------------------------------

/**
 *	...
 *
 *	@return	{Number}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Message.prototype, "text", {
	get : function() {
		return this.m_text;
	},
	set : function(value) {
		this.m_text = value;
		this.m_updateInnerHTML();
	}
});

/**
 *  ...
 *
 *  @return {Number}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Message.prototype, "title", {
    get : function() {
        return this.m_title;
    },
    set : function(value) {
        this.m_title = value;
        this.m_updateInnerHTML();
    }
});

//--------------------------------------------------------------------------
// Override Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Message.prototype.m_initElement = function() {
    this.element.style.margin = "0 0 5px 0";
    this.element.style.color = this.color;
};

//--------------------------------------------------------------------------
// Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Message.prototype.m_updateInnerHTML = function() {
    this.element.innerHTML = this.prefix.toUpperCase() + " " + this.m_text;
    this.element.title = this.m_title;
};