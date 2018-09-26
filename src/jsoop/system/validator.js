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
com.vectorpanic.jsoop.system.Validator = (function(configs, console) {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    // Public constants
    //----------------------------------------------------------------------

    /**
     *  ...
     *
     *  @type {String}
     */
    this.MESSAGE_UNDEFINED_CLASS = "Class '%C' is imported but its object representation can not be found in the code base, please check that the class exists and is imported correctly.";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.MESSAGE_INLINE_JAVASCRIPT = "Codebase contains script elements that advocate inline code, ie the src attribute is missing.";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.MESSAGE_SCOPE_LEAKAGE = "Property '%P' was found in the global scope and does not relate to any class, assumed to be lekage.";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.MESSAGE_UNDEFINED_PACKAGE = "Package '%P' is declared but not defined.";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.MESSAGE_INVALID_PACKAGE = "Package '%P' is of invalid data type, use objects for package structures.";

    //----------------------------------------------------------------------
    // Internal properties
    //----------------------------------------------------------------------

    /**
     *  ...
     *
     *  @type {Array}
     */
    this.m_configs = configs || [];

    /**
     *  ...
     *
     *  @type {com.vectorpanic.jsoop.ui.Console}
     */
    this.m_console = console || new com.vectorpanic.jsoop.ui.Console();
    
    /**
     *  ...
     *
     *  @type {Array}
     */
    this.m_classes = [];
});

//--------------------------------------------------------------------------
// Public static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.refresh = function() {
    this.m_checkScriptFiles();
    this.m_checkObjectStructure();
};

//--------------------------------------------------------------------------
// Internal static methods
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_checkScriptFiles = function() {
	var scripts = document.getElementsByTagName("script");
	for (var i = 0; i < scripts.length; i++) {
		if (scripts[i].src) this.m_registerClassFile(scripts[i].src);
        else this.m_console.log(this.MESSAGE_INLINE_JAVASCRIPT, 0);
	}
};

/**
 *  ...
 *
 *  @path {String}  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_registerClassFile = function(path) {
	//@TODO: MAKE NICE
	var fn = path.split("/").pop();
    var cn = fn.split(".")[0];
    var cf = false;

    for (var i = 0; i < this.m_configs.length; i++) {
        if (this.m_isClass(cn, this.m_configs[i].scope, this.m_configs[i].packages) === true || this.m_isExeption(cn) === true) {
            cf = true;
            break;
        }
    }

    if (cf === true) this.m_classes.push(cn);
    else this.m_console.log(this.MESSAGE_UNDEFINED_CLASS.replace("%C", cn), 1);
};

/**
 *  ...
 *
 *  @param {String} ...
 *  @param {Object} ...
 *  @param {Array}  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_isClass = function(name, scope, packages) {
	//@TODO: ...
    for (var i = 0; i < this.m_configs.length; i++) {
        if (packages == undefined || packages.length == 0) {
            if (typeof scope[name] !== "undefined") {
                return true;
            }
        } else {
            for (var p = 0; p < packages.length; p++) {
                if (scope[packages[p]] != undefined) {
                    if (scope[packages[p]].toString() == "[object Object]") {
                        if (typeof scope[packages[p]][name] !== "undefined") {
                            return true;
                        } 
                    } else {
                        this.m_console.log(this.MESSAGE_INVALID_PACKAGE.replace("%P", packages[p]), 1);
                    }
                } else {
                    this.m_console.log(this.MESSAGE_UNDEFINED_PACKAGE.replace("%P", packages[p]), 1);
                }
            }
        }

        return false;
    }
};

/**
 *  ...
 *
 *  @param {String} ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_isExeption = function(name) {
	for (var i = 0; i < this.m_configs.length; i++) {
        if (this.m_configs[i].exceptions.indexOf(name) > -1) {
            return true;
        }
    }

    return false;
};

/**
 *  ...
 *
 *  @return {undefined}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_checkObjectStructure = function() {
    //@TODO: kontrollera om alias är object eller function?
    for (var i = 0; i < this.m_configs.length; i++) {
         var a = Object.getOwnPropertyNames(this.m_configs[i].scope);
         var b = this.m_configs[i].original;
         var c = this.m_diff(a, b);
         var d = this.m_diff(c, this.m_classes);
         var e = this.m_diff(d, this.m_getAliases());

        for (var j = 0; j < e.length; j++) {
            this.m_console.log(this.MESSAGE_SCOPE_LEAKAGE.replace("%P", e[j]), 2);
        }
    }
};

/**
 *  ...
 *
 *  @return {Array}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_getAliases = function() {
	var r = [];
    for (var i = 0; i < this.m_configs.length; i++) {
        r.push.apply(r, this.m_configs[i].aliases);
    }

    return r;
};

/**
 *  ...
 *
 *  @param {Array} ...
 *  @param {Array} ...
 *
 *  @return {Array}
 */
com.vectorpanic.jsoop.system.Validator.prototype.m_diff = function(a1, a2) {
	return a1.filter(function(i) {return !(a2.indexOf(i) > -1);});
};