# Miracle Grow
This is not just fertilized soil, this is an instant amazon rainforest.  The job of this module is to tie together 3 previous modules to automatically produce a deep binary tree
  -  require tree.js
  -  require queue.js
  -  require random.js

**Do not** forget your module.exports statement at the end.

### Inside the Miracle Grow module
This is one giant function with one parameter (size), representing the total number of sub-trees in your emerging forest.

  -  Declare a variable forestSize and store size in there.
  -  Declare a new Queue named plantingSeeds
  -  Use a loop to fill the queue up to the forestSize.  Here you will use the Random module to help insert random numbers in the queue.

  -  When your loop has finished, declare your first new Tree with the name Forest.  Initialize this root node with a value of zero.
  -  create another for loop to unload the plantingSeeds into the forest.
  -  When this second loop is finished, return the tree named Forest.
