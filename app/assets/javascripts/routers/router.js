Pokedex.Routers.Router = Backbone.Router.extend ({

  initialize: function () {
    this._pokemonIndex = new Pokedex.Views.PokemonIndex();

  },

  routes: {
    '': 'index',
    'pokemon/:id': 'show'
  },

  index: function(){
    // this.view = new Pokedex.Views.PokemonIndex();
    var view = this._pokemonIndex;
    view.refreshPokemon();

    $("#pokedex .pokemon-list").html(view.$el);
  },

  show: function(id){
    var pokemon = this._pokemonIndex.collection.get(id);
    var view = new Pokedex.Views.PokemonDetail({
      model: pokemon,
      el: $(".pokemon-detail")
    });
  }

});


// var view = new Pokedex.Views.PokemonDetail({
//   model: pokemon,
//   el: $(".pokemon-detail")
// });
