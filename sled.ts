
import { Bag, BagType } from "./bag";

export class Sled{
    bagInventory: Bag[];
    constructor(bagInventory: []){
        this.bagInventory = [];
    }
    addBag(bag: Bag){
        this.bagInventory.push(bag);
    }
}



