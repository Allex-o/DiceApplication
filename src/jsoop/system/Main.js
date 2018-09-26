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
com.vectorpanic.jsoop.system.Main = (function() {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    // Public scope
    //----------------------------------------------------------------------

    /**
     *  ...
     * 
     *  @type {Object}
     */
    var m_this = {};

    //----------------------------------------------------------------------
    //  Private properties
    //----------------------------------------------------------------------

    /**
     *  ...
     * 
     *  @type {Array}
     */
    var m_classes = [];

    /**
     *  ...
     * 
     *  @type {Array}
     */
    var m_configs = [new com.vectorpanic.jsoop.system.Config()];

    /**
     *  ...
     * 
     *  @type {com.vectorpanic.jsoop.console.Console}
     */
    var m_console = null;

    /**
     *  ...
     * 
     *  @type {com.vectorpanic.jsoop.system.Validator}
     */
    var m_validator = null;

    /**
     *  ...
     * 
     *  @type {Boolean}
     */
    var m_validationCompromised = false;

    //----------------------------------------------------------------------
    //  Private constants
    //----------------------------------------------------------------------

    /**
     *  ...
     * 
     *  @type {String}
     */
    var MESSAGE_RUNTIME_ERROR_DETECTED = "Program code contains syntax or runtime errors. Validation process has been compromised. Correct the errors and try again.";

    /**
     *  ...
     * 
     *  @type {Array}
     */
    var REFRESH_RATE = 2000;

    //----------------------------------------------------------------------
    // Public methods
    //----------------------------------------------------------------------

    /**
     *	...
     *
     *	@return {undefined}
     */
    m_this.add = function(scope, aliases, packages, exceptions) {
    	var c = new com.vectorpanic.jsoop.system.Config(scope, aliases, packages, exceptions);
        m_configs.push(c);
        update();
    };

    //----------------------------------------------------------------------
    // Private methods
    //----------------------------------------------------------------------

    /**
     *  ...
     *
     *  @return {undefined}
     */
    function preInit(event) {
        m_validationCompromised = true;
    }

    /**
     *	...
     *
     *	@return {undefined}
     */
    function init() {
    	initConsole();
    	initValidator();
    	initScriptExeptions();
    	initTimer();
    	update();
    }

    /** 
     *  ...
     *
     *  @return {undefined}
     */
    function initConsole() {
        m_console = new com.vectorpanic.jsoop.console.Console();
        m_console.appendTo(document.body);
    }

    /** 
     *  ...
     *
     *  @return {undefined}
     */
    function initValidator() {
        m_validator = new com.vectorpanic.jsoop.system.Validator(m_configs, m_console);
    }

    /** 
     *  ...
     *
     *  @return {undefined}
     */
    function initScriptExeptions() {
	    m_this.add(
			window.com.vectorpanic.jsoop,
			["VPJsOOP", "com"],
			["console", "scope", "system"],
			["Manifest"]
		);
    }

    /** 
     *  ...
     *
     *  @return {undefined}
     */
    function initTimer() {
        window.setInterval(update, REFRESH_RATE);
    }

    /** 
     *  ...
     *
     *  @return {undefined}
     */
    function update() {
        if (m_validator != undefined) {
        	m_validator.refresh();
        }

        if (m_validationCompromised === true && m_console != undefined) {
            m_console.log(MESSAGE_RUNTIME_ERROR_DETECTED, 3);
        }
    }

    //----------------------------------------------------------------------
    // Bootstrap
    //----------------------------------------------------------------------

    /**
     *	...
     */
    if (window.addEventListener != undefined) window.addEventListener("load", init, "false");
    else if (window.attachEvent != undefined) window.attachEvent("onload", init);
    else window.onload = init;

    /**
     *  ...
     */
    if (window.addEventListener != undefined) window.addEventListener("error", preInit, "false");
    else if (window.attachEvent != undefined) window.attachEvent("onerror", preInit);
    else window.onerror = preInit;
    
    /**
     *	...
     */
    return m_this;

})();