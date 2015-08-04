Pokedex.Views.PokemonIndex = Backbone.View.extend({
  initialize: function () {
    this.collection = new Pokedex.Collections.Pokemon();
    this.listenTo(this.collection, "add sync", this.render);
  },

  events: {
    "click li.poke-list-item": "selectPokemonFromList"
  },

  render: function() {
    var view = this;
    this.$el.empty();
    this.collection.each (function(pokemon) {
      view.addPokemonToList(pokemon);
    });

    return this;
  },

  addPokemonToList: function (pokemon) {
    var content = JST['pokemonListItem']({ pokemon: pokemon });
    this.$el.append(content);
  },

  refreshPokemon: function (){
    this.collection.fetch();
  },

  selectPokemonFromList: function (e) {
    var id = $(e.currentTarget).data('id');
    var pokemon = this.collection.get(id);
    pokemon.fetch();
    var view = new Pokedex.Views.PokemonDetail({
      model: pokemon,
      el: $(".pokemon-detail")
    });
  }
});
