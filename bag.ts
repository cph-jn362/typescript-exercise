import { Present } from "./present";

export enum BagType {PAPER, CANVAS};

let total = 0;

export class Bag {
    maxWeight: number;
    bagType: BagType;
    presents: Present[]; 
    constructor(maxWeight: number, bagType: BagType){
        this.maxWeight = maxWeight;
        this.bagType = bagType;
        this.presents = [];
    }  
    addPresent(present: Present){
        this.presents.push(present);
    }
    totalWeight(){
        const w1 = this.presents[0].weight;
        const w2 = this.presents[1].weight;
        return w1 + w2;
        // this.presents.forEach(item => {
        //     let total = 0;
        //     return total += item.weight;
        // })
    }
    print(): void{
        console.log("This bag has a max weight of: " + this.maxWeight + " and is of type " + this.bagType)
    }
}