Pokedex.Views.PokemonDetail = Backbone.View.extend({

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click li": "selectToyFromList"
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
  },

  selectToyFromList: function(e) {
    var toyId = $(e.currentTarget).data('toy-id');
    var toy = this.model.toys().get(toyId);
    var view = new Pokedex.Views.ToyDetail ({
      toy: toy,
      $el: $('div.toy-detail')
    });

    view.render().$el;
  }



});
