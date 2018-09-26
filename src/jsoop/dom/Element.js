//--------------------------------------------------------------------------
// Strict mode
//--------------------------------------------------------------------------

"use strict";

//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @version    1.0
 *  @copyright  Copyright (c) 2012-2016.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Jun 10, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>
 */
com.vectorpanic.jsoop.dom.Element = (function(type) {

    //----------------------------------------------------------------------
    // Private constants
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    var DEFAULT_TYPE = "div";

	//----------------------------------------------------------------------
    // Override default parameters
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {String}
     */
    (type = type || DEFAULT_TYPE);

    //----------------------------------------------------------------------
    // Public properties
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {DOMElement}
     */
    this.element = document.createElement(type);

    /**
     *  ...
     *
     *  @type {Element}
     */
    this.element.parent = this;

    //----------------------------------------------------------------------
    // Private properties
    //----------------------------------------------------------------------
    
    /**
     *  ...
     *
     *  @type {function}
     */
    this.m_ema = null;

    /**
     *  ...
     *
     *  @type {function}
     */
    this.m_emr = null;

    //----------------------------------------------------------------------
    // ...
    //----------------------------------------------------------------------

    this.m_init();
});

//--------------------------------------------------------------------------
// Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.dom.Element.prototype.m_init = function() {
    this.m_initElement();
};

/**
 *  ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.dom.Element.prototype.m_initElement = function() {
    //@NOTE: OVERRIDE FROM SUPER
};

//--------------------------------------------------------------------------
// Public static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {Boolean}    ...
 *  @param {DOMElement} ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.dom.Element.prototype.bind = function(type, listener, useCapture, caller) {
    if (this.m_ema == null) {
        if (typeof window.addEventListener === 'function') {
            this.m_ema = this.addEventListener;
        } else if (typeof window.attachEvent === 'function') {
            this.m_ema = this.attachEvent;
        }
    }

    return this.m_ema(type, listener, useCapture, caller);
};

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {Boolean}    ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.dom.Element.prototype.unbind = function(type, handler, useCapture) {
    if (this.m_emr == null) {
        if (typeof window.removeEventListener === 'function') {
            this.m_emr = this.removeEventListener;
        } else if (typeof window.detachEvent === 'function') {
            this.m_ema = this.detachEvent;
        }
    }

    return this.m_emr(type, handler, useCapture);
};

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {Boolean}    ...
 *  @param {DOMElement} ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.dom.Element.prototype.addEventListener = function(type, listener, useCapture, caller) {
    useCapture = useCapture || false;
    caller = caller || this;
    var handler = null;
    if (typeof this.element.addEventListener === 'function') {
        this.element.addEventListener(type, handler = function(event) {
            listener.call(caller, event);
        });
    }

    return handler;
};

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {Boolean}    ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.dom.Element.prototype.removeEventListener = function(type, handler, useCapture) {
    useCapture = useCapture || false;
    if (typeof this.element.removeEventListener === 'function') {
        this.element.removeEventListener(type, handler, useCapture);
    }
};

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {DOMElement} ...
 *
 *  @return {function}
 */
com.vectorpanic.jsoop.dom.Element.prototype.attachEvent = function(type, listener, caller) {
    caller = caller || this;
    var handler = null;
    if (typeof this.element.attachEvent === 'function') {
        this.element.addEventListener("on" + type, handler = function(event) {
            listener.caller(caller, window.event);
        });
    }

    return handler;
};

/**
 *  ...
 *
 *  @param {String}     ...
 *  @param {function}   ...
 *  @param {DOMElement} ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.dom.Element.prototype.detachEvent = function(type, handler) {
    if (typeof this.element.detachEvent === 'function') {
        this.element.detachEvent("on" + type, handler);
    }
};

/**
 *  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.dom.Element.prototype.appendTo = function(parent) {
    parent.appendChild(this.element); //@TODO: ...
};

/**
 *  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.dom.Element.prototype.remove = function() {
    //@TODO: ...
    if (this.element.parentNode != null) {
        this.element.parentNode.removeChild(this.element);
    }
};