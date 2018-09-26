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
com.vectorpanic.jsoop.console.Console = (function() {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    // Internal properties
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {function}
     */
    this.m_header = null;

    /**
     *  ...
     *
     *  @type {function}
     */
    this.m_messages = null;

    //----------------------------------------------------------------------
    //  Constructor call
    //----------------------------------------------------------------------
    
    /**
     *  ...
     */
    com.vectorpanic.jsoop.dom.Element.call(this, "div");
});

//--------------------------------------------------------------------------
//  Inheritance
//--------------------------------------------------------------------------

com.vectorpanic.jsoop.console.Console.prototype = new com.vectorpanic.jsoop.dom.Element();
com.vectorpanic.jsoop.console.Console.prototype.constructor = com.vectorpanic.jsoop.console.Console;

//--------------------------------------------------------------------------
// Public static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Console.prototype.log = function(message, type, title) {
	if (this.m_messages != undefined) this.m_messages.add(message, type);
	if (this.m_header   != undefined) this.m_header.notices  = this.m_messages.numNotices;
	if (this.m_header   != undefined) this.m_header.warnings = this.m_messages.numWarnings;
	if (this.m_header   != undefined) this.m_header.errors   = this.m_messages.numErrors;
};

//--------------------------------------------------------------------------
// Override Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Console.prototype.m_init = function() {
    com.vectorpanic.jsoop.dom.Element.prototype.m_init.call(this);
    this.m_initHeader();
    this.m_initMessages();
};

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Console.prototype.m_initElement = function() {
    this.element.style.fontFamily = "Helvetica Neue, Helvetica, Arial, sans-serif";
    this.element.style.fontSize = "14px";
    this.element.style.fontWeight = "300";
    this.element.style.backgroundColor = "#434A54";
    this.element.style.position = "absolute";
    this.element.style.right = "10px";
    this.element.style.top = "10px";
    this.element.style.padding = "10px";
    this.element.style.margin = "0px";
    this.element.style.borderRadius = "5px";
    this.element.style.color = "#F5F7FA";
    this.element.style.maxWidth = "640px";
    this.element.style.zIndex = "9999";
};

//--------------------------------------------------------------------------
// Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Console.prototype.m_initHeader = function() {
	this.m_header = new com.vectorpanic.jsoop.console.Header();
	this.m_header.appendTo(this.element);
};

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Console.prototype.m_initMessages = function() {
	this.m_messages = new com.vectorpanic.jsoop.console.Messages();
	this.m_messages.appendTo(this.element);
};