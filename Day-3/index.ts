// interface User {
//     name :string
//     age :number
// }

// function call_user(user:User|null):string|undefined{

//     if(user == null){
//         return "error at input"
//     }
//     let message = user?.name + " age : "+String(user?.age)
//     return message
// }

// console.log(call_user({name:"tan",age:20}));
// console.log(call_user(null));

type Point = {
    x:number,
    y:number
}

function cal_distance(pos1:Point,pos2:Point):number{
    let distance = Math.sqrt(Math.pow(pos1.x-pos2.x,2)+Math.pow(pos1.y-pos2.y,2))
    return distance
}

console.log(cal_distance({x:0,y:0},{x:5,y:12}));
