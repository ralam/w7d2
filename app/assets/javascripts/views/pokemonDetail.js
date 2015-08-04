Pokedex.Views.PokemonDetail = Backbone.View.extend({

  initialize: function (options) {
    this.pokemon = options.model;
  },

  template: JST['pokemonDetail'],
  render: function () {
    var pokemon = this.pokemon;
    var content = this.template({pokemon: pokemon});
    this.$el.html(content);
    return this;
  }

});
