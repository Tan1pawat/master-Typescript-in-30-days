function avgofarray(arr:number[]):number | string{
    let sum:number = 0
    let count:number = arr.length
    if(count< 1){
        return "False to find avg"
    }
    arr.forEach(i => {
        sum += i
    });
    
    return Number(sum/count).toFixed(2)
}

console.log(avgofarray([1,3,4]));