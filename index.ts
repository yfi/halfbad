export function range(start:number,end:number,inc:number=1):array{
  
  let range = [];
  inc = Math.abs(inc)
  console.log(inc)
  
if (start<end) {
  
   for (let i = start; i < end ; i+=inc) range.push(i)
   
   
} else {
  
   for (let i = start; i > end; i-=inc)  range.push(i)
   
   
}

  return range
  
}

const r = range(0,5)
const rr = range(4,1)
const rrr = range(0,10,2)
const rrrr = range(5,5)
console.log(r,rr,rrr,rrrr)