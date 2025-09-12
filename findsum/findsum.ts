function findSum(arr: number[], sum: number): number[] {
    //Fuerza bruta
    /*for(let i = 0; i < arr.length - 1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i]! + arr[j]! === sum){
                return [arr[i]!, arr[j]!];
            }
        }
    }
    return [];*/

    //Diccionario
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {

        const element : number = map.get(arr[i]);
        const x = sum - arr[i]!;

        console.log("element: " + element);
        console.log("x: " + x);

        if (element){
            return [element, arr[i]!];
            console.log(map);
        }else{
            map.set(x, arr[i]!);
            console.log(map);
        }

    }

    return [];
}

const arrOne = [7,3,-1,4];
const sumOne = 2;

const arrTwo = [9,1,-2,-1];
const sumTwo = 10;

const arrThree = [1,2];
const sumThree = 3;

console.log(findSum(arrOne, sumOne));
console.log("-----");
console.log(findSum(arrTwo, sumTwo));
console.log("-----");
console.log(findSum(arrThree, sumThree));
