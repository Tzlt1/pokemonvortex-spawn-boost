// ==UserScript==
// @name        New script pokemon-vortex.com
// @namespace   Violentmonkey Scripts
// @match       https://www.pokemon-vortex.com/map/live*
// @grant       none
// @version     1.0
// @author      -
// @description 7/1/2024, 9:56:51 PM
// ==/UserScript==

(function () {
  'use strict';
  var rareRate = 0.2;
  var legendaryRate = 0.3;
  var commonRate = 1 - rareRate - legendaryRate;

  // Hook into the Pokémon spawn function
  Object.defineProperty(window.PokemonVortex, 'spawnPokemon', {
    value: function () {
      var pokemon = window.PokemonVortex._spawnPokemon.apply(this, arguments);
      var rarity = Math.random();

      if (rarity < commonRate) {
        pokemon.rarity = 'Common';
      } else if (rarity < commonRate + rareRate) {
        pokemon.rarity = 'Rare';
      } else {
        pokemon.rarity = 'Legendary';
      }

      return pokemon;
    }
  });
})();
