// @ts-nocheck
Object.defineProperty(exports, '__esModule', { value: true });
var $root = {};
var HttpServiceConfigOptions = {};

$root.protorequest = (function() {
  /**
   * Namespace protorequest.
   * @exports protorequest
   * @namespace
   */
  var protorequest = {};

  protorequest.HttpServiceConfigOptions = (function() {
    /**
     * Properties of a HttpServiceConfigOptions.
     * @memberof protorequest
     * @interface IHttpServiceConfigOptions
     * @property {string|null} [host] HttpServiceConfigOptions host
     * @property {string|null} [setHost] HttpServiceConfigOptions setHost
     * @property {string|null} [baseUrl] HttpServiceConfigOptions baseUrl
     * @property {string|null} [setBaseUrl] HttpServiceConfigOptions setBaseUrl
     * @property {string|null} [version] HttpServiceConfigOptions version
     * @property {string|null} [setVersion] HttpServiceConfigOptions setVersion
     * @property {Headers|null} [headers] HttpServiceConfigOptions headers
     * @property {Headers|null} [setHeaders] HttpServiceConfigOptions setHeaders
     */

    /**
     * Constructs a new HttpServiceConfigOptions.
     * @memberof protorequest
     * @classdesc Represents a HttpServiceConfigOptions.
     * @implements IHttpServiceConfigOptions
     * @constructor
     * @param {protorequest.IHttpServiceConfigOptions=} [properties] Properties to set
     */
    function HttpServiceConfigOptions(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null)
            this[keys[i]] = properties[keys[i]];
    }

    /**
     * HttpServiceConfigOptions host.
     * @member {string} host
     * @memberof protorequest.HttpServiceConfigOptions
     * @instance
     */
    HttpServiceConfigOptions.prototype.host = '';

    /**
     * Sets host
     * @function setHost
     * @memberof protorequest.HttpServiceConfigOptions
     * @param {string} value
     * @instance
     * @returns {protorequest.HttpServiceConfigOptions} HttpServiceConfigOptions
     */
    HttpServiceConfigOptions.prototype.setHost = function(value) {
      this['host'] = value;
      return this;
    };

    /**
     * HttpServiceConfigOptions baseUrl.
     * @member {string} baseUrl
     * @memberof protorequest.HttpServiceConfigOptions
     * @instance
     */
    HttpServiceConfigOptions.prototype.baseUrl = '';

    /**
     * Sets baseUrl
     * @function setBaseUrl
     * @memberof protorequest.HttpServiceConfigOptions
     * @param {string} value
     * @instance
     * @returns {protorequest.HttpServiceConfigOptions} HttpServiceConfigOptions
     */
    HttpServiceConfigOptions.prototype.setBaseUrl = function(value) {
      this['baseUrl'] = value;
      return this;
    };

    /**
     * HttpServiceConfigOptions version.
     * @member {string} version
     * @memberof protorequest.HttpServiceConfigOptions
     * @instance
     */
    HttpServiceConfigOptions.prototype.version = '';

    /**
     * Sets version
     * @function setVersion
     * @memberof protorequest.HttpServiceConfigOptions
     * @param {string} value
     * @instance
     * @returns {protorequest.HttpServiceConfigOptions} HttpServiceConfigOptions
     */
    HttpServiceConfigOptions.prototype.setVersion = function(value) {
      this['version'] = value;
      return this;
    };

    /**
     * HttpServiceConfigOptions headers.
     * @member {Headers} headers
     * @memberof protorequest.HttpServiceConfigOptions
     * @instance
     */
    HttpServiceConfigOptions.prototype.headers = '';

    /**
     * Sets headers
     * @function setHeaders
     * @memberof protorequest.HttpServiceConfigOptions
     * @param {Headers} value
     * @instance
     * @returns {protorequest.HttpServiceConfigOptions} HttpServiceConfigOptions
     */
    HttpServiceConfigOptions.prototype.setHeaders = function(value) {
      this['headers'] = value;
      return this;
    };

    /**
     * Converts the HttpServiceConfigOptions to an object
     * @function toObject
     * @memberof protorequest.HttpServiceConfigOptions
     * @instance
     * @returns {object} object
     */
    HttpServiceConfigOptions.prototype.toObject = function() {
      return JSON.parse(JSON.stringify(this));
    };

    return HttpServiceConfigOptions;
  })();

  HttpServiceConfigOptions = protorequest.HttpServiceConfigOptions;

  return protorequest;

})();

exports["$root"] = $root;
exports["HttpServiceConfigOptions"] = HttpServiceConfigOptions;
exports["default"] = $root;
