//goal to make a tree structure.
function Tree(val){
     this.value = val;
     this.leftChild =null;
     this.rightChild =null;

    this.search = function(leaf){
        console.log(leaf);
        console.log(leaf.value);
        if( this.value == leaf.value){
            return this.value;
        }
        else if( this.value < leaf.value){
            this.search(this.leftChild);
        }
        else if( this.value > leaf.value){
            this.search(this.rightChild);
        }
        else{
            return null;
        }
    };
    this.add = function(leaf){
        if(this.value > leaf.value){
            if(this.leftChild == null){
                this.leftChild = leaf;
            }
            else{
                this.add(this.leftChild);
            }

        }
        else if(this.value < leaf.value){
            if(this.rightChild == null){
                this.rightChild = leaf;
            }
            else{
                this.add(this.rightChild);
            }
        }
        else{
            return;
        }
        // value == leaf.value but nothing happens
    };
}
module.exports = Tree;
