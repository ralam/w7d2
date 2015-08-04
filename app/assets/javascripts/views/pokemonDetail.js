Pokedex.Views.PokemonDetail = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  },

  template: JST['pokemonDetail'],
  render: function () {
    var pokemon = this.model;
    var content = this.template({pokemon: pokemon, toys: pokemon.toys });
    this.$el.html(content);
    pokemon.toys().each(function(toy) {
      var toyContent = JST['toyListItem']({toy: toy});
      $('ul.toys').append(toyContent);
    });
    return this;
  }

});
