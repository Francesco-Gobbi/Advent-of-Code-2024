import {readFileSync} from "fs"

const value = readFileSync("./input.txt","utf-8")
    .split("\n")
    .map((e:string)=> e.split(" ").map(Number))
    .filter((value: number[])=>{
        let checkOrder = false
        const diff = value.filter((value:number,index:number,array:Array<number>)=>{
                if(array.length<=1){
                    return -1
                }
                let diff:number = array[index] - array[index+1]
                if(index!=0&&((diff<0&&checkOrder==true)||(diff>0&&checkOrder==false))){
                    return -1
                }
                checkOrder = diff > 0
                diff = Math.abs(diff)
                if(diff<1||diff>3||diff==0){
                    return -1
                }
            })

        if(diff.length>0){
            return false
        }else{
            return value
        }
    })

console.log(value.length)
