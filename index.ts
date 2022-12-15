export function range(start: number, end: number, inc: number = 1): number[] {

  let range = []
  inc = Math.abs(inc)

  if (start < end)
    for (let i = start; i < end; i += inc) range.push(i)

  
  if(start >= end)
    for (let i = start; i > end; i -= inc) range.push(i)

  return range

}