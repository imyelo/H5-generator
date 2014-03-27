seajs.config({

  "plugins": ["text", "shim"],

  "debug": true,

  "base": "./app/",

  "charset": "utf-8",

  "alias": {
    "jquery": "sea-modules\\jquery\\jquery\\1.10.1\\jquery",
    "backbone": "sea-modules\\gallery\\backbone\\1.1.0\\backbone",
    "underscore": "sea-modules\\gallery\\underscore\\1.5.2\\underscore",
    "sea": "sea-modules\\seajs\\seajs\\2.2.1\\sea"
  }

});