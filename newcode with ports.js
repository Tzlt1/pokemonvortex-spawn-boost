// ==UserScript==
// @name         Pokémon Vortex Spawn Rates and Ports Modifier
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Modify spawn rates and ports for Pokémon Vortex.
// @author       You
// @match        https://www.pokemon-vortex.com/map/live
// @grant        none
// ==/UserScript==

// Constants
const defaultSpawnRates = {
  legendary: 0.2,
  rare: 0.3,
  common: 0.5,
};

const defaultPorts = {
  legendary: [8080, 8081, 8082],
  rare: [8083, 8084, 8085],
  common: [8086, 8087, 8088],
};

// Spawn Rates
function getSpawnRates() {
  try {
    const storedSpawnRates = JSON.parse(localStorage.getItem('spawnRates'));
    console.log('Stored spawn rates:', storedSpawnRates);
    if (!storedSpawnRates) {
      return defaultSpawnRates;
    }
    return storedSpawnRates;
  } catch (error) {
    handleError(error, 'Error parsing spawn rates');
    return defaultSpawnRates;
  }
}

function modifySpawnRates(spawnRates) {
  if (!spawnRates || typeof spawnRates !== 'object' || Array.isArray(spawnRates)) {
    handleError(new Error('Invalid spawn rates object'), 'Error modifying spawn rates');
    return;
  }

  console.log('Modifying spawn rates:', spawnRates);
  spawnRates.legendary = 0.2;
  spawnRates.rare = 0.3;
  spawnRates.common = 0.5;

  try {
    localStorage.setItem('spawnRates', JSON.stringify(spawnRates));
    console.log('Spawn rates modified and saved to local storage');
  } catch (error) {
    handleError(error, 'Error setting spawn rates');
  }
}

// Ports
function getPorts() {
  try {
    const storedPorts = JSON.parse(localStorage.getItem('ports'));
    console.log('Stored ports:', storedPorts);
    if (!storedPorts) {
      return defaultPorts;
    }
    return storedPorts;
  } catch (error) {
    handleError(error, 'Error parsing ports');
    return defaultPorts;
  }
}

function modifyPorts(ports) {
  if (!ports || typeof ports !== 'object' || Array.isArray(ports)) {
    handleError(new Error('Invalid ports object'), 'Error modifying ports');
    return;
  }

  console.log('Modifying ports:', ports);
  ports.legendary = defaultPorts.legendary;
  ports.rare = defaultPorts.rare;
  ports.common = defaultPorts.common;

  try {
    localStorage.setItem('ports', JSON.stringify(ports));
    console.log('Ports modified and saved to local storage');
  } catch (error) {
    handleError(error, 'Error setting ports');
  }
}

// Error handling
function handleError(error, message) {
  console.error(`${message}: ${error}`);
  alert(`Error: ${message}`);
  // Add additional error handling logic here, such as displaying an error message to the user
}

// Main script execution
const spawnRates = getSpawnRates();
modifySpawnRates(spawnRates);

const ports = getPorts();
modifyPorts(ports);

console.log("Spawn rates and ports modified!");
