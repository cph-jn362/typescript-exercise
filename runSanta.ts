import { Santa } from "./santa";
import { Bag, BagType } from "./bag";
import { Present, PresentType } from "./present";
import { Sled } from "./sled";

const santaClaus = new Santa("Santa", 80);

const santaSled = new Sled([]);
const santaBag1 = new Bag(20, BagType.CANVAS);
const presentOne = new Present("playstation", 8, PresentType.HARD);
const presentTwo = new Present("sweather", 3, PresentType.SOFT);


santaSled.addBag(santaBag1);


santaBag1.addPresent(presentOne);
santaBag1.addPresent(presentTwo);

console.log(santaSled);

console.log(santaBag1.totalWeight());

presentOne.print();
santaBag1.print();