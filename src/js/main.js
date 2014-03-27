define(function (require, exports, module) {
  var Backbone = require('backbone');
  var $ = require('zepto');

  Backbone.$ = $;
  Backbone.history.start();
});
