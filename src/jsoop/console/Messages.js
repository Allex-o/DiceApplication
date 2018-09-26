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
com.vectorpanic.jsoop.console.Messages = (function() {

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
     *  @type {Array}
     */
    this.m_messages = [];

    //----------------------------------------------------------------------
    //  Constructor call
    //----------------------------------------------------------------------
    
    /**
     *  ...
     */
    com.vectorpanic.jsoop.dom.Element.call(this, "ul");
});

//--------------------------------------------------------------------------
//  Inheritance
//--------------------------------------------------------------------------

com.vectorpanic.jsoop.console.Messages.prototype = new com.vectorpanic.jsoop.dom.Element();
com.vectorpanic.jsoop.console.Messages.prototype.constructor = com.vectorpanic.jsoop.console.Messages;

//--------------------------------------------------------------------------
//  Public static getter and setter methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Messages.prototype, "numNotices", {
    get : function() {
        var n = 0;
        for (var i = 0; i < this.m_messages.length; i++) {
            if (this.m_messages[i].id == 0) n++; 
        }

        return n;
    }
});

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Messages.prototype, "numWarnings", {
    get : function() {
        var n = 0;
        for (var i = 0; i < this.m_messages.length; i++) {
            if (this.m_messages[i].id == 1) n++; 
        }

        return n;
    }
});

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Messages.prototype, "numErrors", {
    get : function() {
        var n = 0;
        for (var i = 0; i < this.m_messages.length; i++) {
            if (this.m_messages[i].id == 2) n++; 
        }

        return n;
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
com.vectorpanic.jsoop.console.Messages.prototype.m_initElement = function() {
    this.element.style.margin = "0px";
};

//--------------------------------------------------------------------------
// Public static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Messages.prototype.add = function(text, type) {
    if (this.isUnique(text) === true) {
    	var message;
    	if 		(type === 1) message = new com.vectorpanic.jsoop.console.Warning(text);
    	else if (type === 2) message = new com.vectorpanic.jsoop.console.Error(text);
        else if (type === 3) message = new com.vectorpanic.jsoop.console.Critical(text);
    	else message = new com.vectorpanic.jsoop.console.Notice(text);

    	this.m_messages.push(message);
    	message.appendTo(this.element);
    }
};

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Messages.prototype.isUnique = function(text) {
    for (var i = 0; i < this.m_messages.length; i++) {
		if (text == this.m_messages[i].text) {
			return false;
		}
	}

	return true;
};