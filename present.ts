export enum PresentType {SOFT, HARD};

export class Present {
    name: string;
    weight: number;
    presentType: PresentType;
    constructor(name: string, weight: number, presentType: PresentType){
        this.name = name;
        this.weight = weight;
        this.presentType = presentType;
    }
    getPresentType(){
        return this.presentType; 
    }
    getWeight(){
        return this.weight;
    }
    print(): void{
        console.log(this.name + " " + this.weight + " " + this.presentType)
    }
}




