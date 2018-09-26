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
com.vectorpanic.jsoop.console.Header = (function() {

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
     *  @type {Integer}
     */
    this.m_numNotices = 0;

    /**
     *  ...
     *
     *  @type {Integer}
     */
    this.m_numWarnings = 0;

    /**
     *  ...
     *
     *  @type {Integer}
     */
    this.m_numErrors = 0;

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

com.vectorpanic.jsoop.console.Header.prototype = new com.vectorpanic.jsoop.dom.Element();
com.vectorpanic.jsoop.console.Header.prototype.constructor = com.vectorpanic.jsoop.console.Header;

//--------------------------------------------------------------------------
//  Public static getter and setter methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Header.prototype, "notices", {
    get : function() {
        return this.m_numNotices;
    },
    set : function(value) {
        this.m_numNotices = value;
        this.m_updateInnerHTML();
    }
});

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Header.prototype, "warnings", {
    get : function() {
        return this.m_numWarnings;
    },
    set : function(value) {
        this.m_numWarnings = value;
        this.m_updateInnerHTML();
    }
});

/**
 *  ...
 *
 *  @return {Integer}
 */
Object.defineProperty(com.vectorpanic.jsoop.console.Header.prototype, "errors", {
    get : function() {
        return this.m_numErrors;
    },
    set : function(value) {
        this.m_numErrors = value;
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
com.vectorpanic.jsoop.console.Header.prototype.m_initElement = function() {
    this.element.style.fontSize = "14px";
    this.element.style.padding = "0px";
    this.element.style.margin = "0px";
    this.element.style.fontWeight = 400;
    this.element.style.letterSpacing = "1px";
    this.element.innerHTML = "JsOOP v"+com.vectorpanic.jsoop.version;
};

//--------------------------------------------------------------------------
// Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.console.Header.prototype.m_updateInnerHTML = function() {
    this.element.innerHTML = this.element.innerHTML = "JsOOP v"+com.vectorpanic.jsoop.version+" - Notices: "+this.m_numNotices+", Warnings: "+this.m_numWarnings+", Errors: "+this.m_numErrors;
};