import {readFileSync} from "fs"

const value = readFileSync("./input.txt","utf-8")
    .split("\n")
    .map((e:string)=> e.split(" ").map(Number))
    .filter((value: number[])=>{
        let checkOrder = false
        let status = -1

        value.map((value:number,index:number,array:Array<number>)=>{
                if(array.length<=1){
                    status += 2
                }
                let diff:number = array[index] - array[index+1]
                if(index!=0&&((diff<0&&checkOrder==true)||(diff>0&&checkOrder==false))){
                    status ++
                }
                checkOrder = diff > 0
                diff = Math.abs(diff)
                if(diff<1||diff>3){
                    status += 2
                }
                if(diff==0){
                    status ++
                }
            })

        if(status>=1){
            return false
        }else{
            return value
        }
    })

console.log(value.length)
