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
com.vectorpanic.jsoop.console.Error = (function(text, title) {

    //----------------------------------------------------------------------
    // Strict mode
    //----------------------------------------------------------------------

    "use strict";

    //----------------------------------------------------------------------
    //  Constructor call
    //----------------------------------------------------------------------
    
    /**
     *  ...
     */
    com.vectorpanic.jsoop.console.Message.call(this, "#FC6E51", "<i>error:</i>");

    //----------------------------------------------------------------------
    // Override public properties
    //----------------------------------------------------------------------

    /**
     *  ...
     *
     *  @type {Integer}
     */
    this.id = 2;
    
    /**
     *  ...
     *
     *  @type {String}
     */
    this.text = text || "";

    /**
     *  ...
     *
     *  @type {String}
     */
    this.title = title || this.text;
});

//--------------------------------------------------------------------------
//  Inheritance
//--------------------------------------------------------------------------

com.vectorpanic.jsoop.console.Error.prototype = new com.vectorpanic.jsoop.console.Message();
com.vectorpanic.jsoop.console.Error.prototype.constructor = com.vectorpanic.jsoop.console.Error;