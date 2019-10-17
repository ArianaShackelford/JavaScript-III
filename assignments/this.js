/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: if in the global scope `this` will be the window or console.
* 2. Implicit Binding: If `this` is called by dot to the left of it the object infront on it is `this`.
* 3. New Binding: When using a constructor function `this` refers to a specific object that was created and returned by the constructor function.
* 4. Explicit Binding: Is used when the `.call` or `.apply` methods are used, `this` can then overwrite implicit binding. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function global(location){
    console.log('Window Binding:',this);
    return location;
}
global("Denmark");
// Principle 2

// code example for Implicit Binding
const implicitMaterial = {
    ridiculousness: 'snugglewumpus',
    saySomethingSilly: function (name){
        console.log('Implicit Binding:',`Oh ${name} you're such a ${this.ridiculousness}!`);
    }
};

implicitMaterial.saySomethingSilly('Flora');
// Principle 3

// code example for New Binding
function CrazedCritters(critter) {
    this.proclamation = 'Ah-ooooo-gaaa 😍';
    this.critter = critter;
    this.holla = function(){
        console.log('New Binding:',`The ${this.critter} says ${this.proclamation}!!!`)
    }
}

const wolverine = new CrazedCritters('Wolverine');
const squirrel = new CrazedCritters('Squirrel')
const badger = new CrazedCritters('Badger')
wolverine.holla();
squirrel.holla();
badger.holla();
// Principle 4

console.log('Explicit Binding:⬇️');
squirrel.holla.call(badger);
badger.holla.call(wolverine);
// code example for Explicit Binding