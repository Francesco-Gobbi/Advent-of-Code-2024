import {readFileSync} from "fs"

let filterData = readFileSync("input.txt","utf-8")
    .split(/don't\(\)/gm).map((value:string,idx:number)=>{
        if(idx==0){
            return value
        }
        return value.split(/do\(\)/gm).map((value:string,idx:number)=>{
            if(idx!=0){
                return value
            }
        })
    }).flat(1).join()
    .match(/mul\((\d{1,}),(\d{1,})\)/gm)
    .map((match: string) =>{
      return match.match(/(\d{1,},(\d{1,}))/gm)
          .map((data:string)=> {
              let v = data.split(",")
              return Number(v[0]) * Number(v[1])
          })
    }).flat(1).reduce((prev:number,curr:number)=>prev+curr)

console.log(filterData)
