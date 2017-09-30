/*
 * Finding animal type by navigating the Food Chain
 *
 * Using a series of ternary operator to set the animal category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 */

// `eatsPlants` and `eatsAnimals` to test your code.  Change values to test all scenarios
var eatsPlants = false;
var eatsAnimals = true;

var animalCategory = eatsPlants && eatsAnimals ? "omnivore" : (eatsPlants ? "herbivore" : (eatsAnimals ? "carnivore" : undefined));
console.log(animalCategory);