/** https://leetcode.com/problems/all-oone-data-structure/description/
 * Initialize your data structure here.
 */
var AllOne = function() {
    this.keys=[]
    this.vals=[]
};

/**
 * Inserts a new key <Key> with value 1. Or increments an existing key by 1. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    if (this.keys.indexOf(key)==-1) {
        this.keys.push(key)
        this.vals.push(1)
    } else {
        this.vals[this.keys.indexOf(key)]++
    }
};

/**
 * Decrements an existing key by 1. If Key's value is 1, remove it from the data structure. 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    let p = this.keys.indexOf(key)
    if (p>-1) {
        if (this.vals[p]==1) {
            this.keys.splice(p,1)
            this.vals.splice(p,1)
        } else {
            this.vals[p]--
        }
    }
};

/**
 * Returns one of the keys with maximal value.
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    if (this.vals.length==0) return ""
    let max=this.vals[0]
    this.vals.forEach((val)=>{
        max=(val>max)?val:max
    })
    return this.keys[this.vals.indexOf(max)]
};

/**
 * Returns one of the keys with Minimal value.
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    if (this.vals.length==0) return ""
    let min=this.vals[0]
    this.vals.forEach((val)=>{
        min=(val<min)?val:min
    })
    return this.keys[this.vals.indexOf(min)]
};

/** 
 * Your AllOne object will be instantiated and called as such:
 * var obj = Object.create(AllOne).createNew()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */