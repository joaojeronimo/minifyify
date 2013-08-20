var Backbone = require('backbone')
  , $ = require('../libraries/Jquery')
  , _ = require('lodash')
  , View;

View = Backbone.View.extend({
  template: _.template('<%= message %>')
, render: function () {
    this.el.innerHTML = (this.template({message: 'Hello From View Line 5'}));

    return this;
  }
});

module.exports = View;