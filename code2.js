// ==UserScript==
// @name        New script pokemon-vortex.com2
// @namespace   Violentmonkey Scripts
// @match       https://www.pokemon-vortex.com/map/live*
// @grant       none
// @version     1.0
// @author      -
// @description 7/1/2024, 11:32:15 PM
// ==/UserScript==

// Legendary spawn rate modifier
var legendarySpawnRate = 0.20; // 20% chance of legendary spawn
var rareSpawnRate = 0.30; // 30% chance of rare spawn
var commonSpawnRate = 0.50; // 50% chance of common spawn

// Function to modify Pokémon spawn rates
function modifySpawnRates() {
  // Get the Pokémon spawn rate array
  var spawnRates = JSON.parse(localStorage.getItem('spawnRates'));

  // Modify the spawn rates
  spawnRates.legendary = legendarySpawnRate;
  spawnRates.rare = rareSpawnRate;
  spawnRates.common = commonSpawnRate;

  // Save the modified spawn rates
  localStorage.setItem('spawnRates', JSON.stringify(spawnRates));
}

// Run the script on page load
$(document).ready(function() {
  modifySpawnRates();
});
