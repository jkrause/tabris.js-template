/** global */
function tabris() {};
tabris.load = function() {};


/**
 * Creates a native widget  {@link http://tabrisjs.com/doc/}
 * @param type the type of the widget as a string
 * @param properties a property map that provides configuration for the native widget.
 * @return The handle to the native object
 * @example var button = tabris.create("Button", { text: "OK", layoutData: {right: 10, bottom: 10} });
 */
tabris.create = function (type, properties) {
  return Widget;
};

var Widget = {

  /**
   * Appends a widget to a container
   * Containers are Page, Composite, Group, Swipe
   * @param widget The widget that will be appended
   * @return {Widget} self - allowing for a fluent API
   */
  append: function(widget) {
    return this;
  },

  /**
   * Appends a widget to a container
   * Containers are Page, Composite, Group, Swipe
   * @param widget The widget container to append to
   * @return {Widget} self - allowing for a fluent API
   * @example var button = tabris.create("Button", { text: "OK",  ... }).appendTo(page);
   */
  appendTo: function(widget) {
    return this;
  },

  /**
   * Sets a single property on a native widget
   * @param property - a property of the widget
   * @param value - the value to be set
   * @return {Widget} self - allowing for a fluent API
   * @example button.set("visibility", false);
   */
  set: function(property, value) {
    return this;
  },

  /**
   * Gets a property from the native widget
   * @param propertyName the name of the property 
   * @return the property value
   */
  get: function(propertyName) {
    var value = {};
    return value;
  },

  /**
   * Calls a function on the native widget
   * @param functionName the name of the native function to call 
   * @return may return a value
   */
  call: function(functionName) {
    var value = {};
    return value;
  },

  /**
   * Registers a listener for an event on a native widget
   * @param eventName  the name of the event
   * @param listener the function to execute
   * @param [context] - optional
   */
  on: function(eventName, listener, context) {
    return this;
  },

  /**
   * De-registers a listener for an event on a native widget
   * @param eventName the name of the event
   * @param listener - the function to de-register
   * @param [context] - optional
   */
  off: function(eventName, listener, context) {
    return this;
  },

  /**
   * Disposes of a native widget
   */
  dispose: function() {
  }

};
