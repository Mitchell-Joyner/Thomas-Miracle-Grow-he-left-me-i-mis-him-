const Tree = require('./Tree.js');
const Queue = require('./Queue.js');
const Random = require('./Random.js');

const miracleGrow = function(size){
  let forestSize = size;
  let plantingSeeds = new Queue();
  for (let c=0; c<forestSize;c++){
    plantingSeeds.enqueue(Random().discreteRangeIn(1,1000));
  }
  let forest = new Tree(0);
  for (let c=0; c<plantingSeeds.length;c++){
    forest.add(new Tree(plantingSeeds.dequeue()));
  }
  return forest;
}
module.exports = MiracleGrow;
