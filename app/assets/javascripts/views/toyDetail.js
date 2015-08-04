Pokedex.Views.ToyDetail = Backbone.View.extend({

  initialize: function (options) {
    this.toy = options.toy;
    this.$el = options.$el;
  },

  template: JST['toyDetail'],

  render: function () {
    var toy = this.toy;
    var $tempArr = $([]);
    var content = this.template({toy: toy, pokes: $tempArr});

    this.$el.html(content);
    return this;
  }

});
