import {readFileSync} from "fs"
const input1: Array<number> = []
const input2: Array<number> = []

const data: String = readFileSync("./input.txt","utf-8")
data.split("\n").map((e: String)=>{
    input1.push(Number(e.split(" ")[0]))
    input2.push(Number(e.split(" ")[3]))
})

const input2Sorted: Array<number> = input2.sort()

const result:number = input1.sort().reduce((sum:number, value:number, idx:number) =>{
    let diff = Math.abs(value - input2Sorted[idx-1])
     console.log("Diff: ",diff," Data: ",value, input2Sorted[idx-1]," Idx: ",idx, " Sum: ",sum)

    return sum += diff
})

console.log(result)
