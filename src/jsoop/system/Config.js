//--------------------------------------------------------------------------
// Public class
//--------------------------------------------------------------------------

/**
 *  ...
 *
 *  @version    1.0
 *  @copyright  Copyright (c) 2012-2016.
 *  @license    Creative Commons (BY-NC-SA)
 *  @since      Jan 11, 2016
 *  @author     Henrik Andersen <henrik.andersen@lnu.se>
 */
com.vectorpanic.jsoop.system.Config = (function(scope, aliases, packages, exceptions) {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    //  Private properties
    //----------------------------------------------------------------------

    /**
     *  ...
     * 
     *  @type {Array}
     */
    this.aliases = aliases || []; //@NOTE: Footprints is a better name, FIX ASP

    /**
     *  ...
     * 
     *  @type {Object}
     */
    this.exceptions = exceptions || [];

    /**
     *  ...
     * 
     *  @type {Object}
     */
    this.namespaces = [];

    /**
     *  ...
     * 
     *  @type {Array}
     */
    this.packages = packages || [];

    /**
     *  ...
     * 
     *  @type {Object}
     */
    this.scope = scope || window;

    /**
     *  ...
     * 
     *  @type {Object}
     */
    this.original = Object.getOwnPropertyNames(this.scope);
});