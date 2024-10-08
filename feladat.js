let x="hellotheretosdnnskag";
let y=0;
let z=""
function betu(x){
    console.log(x.slice(0,5))
    console.log(x.slice(2,8))
    console.log(x.slice(4,x.End))
    console.log(x.slice(4,11))
    console.log(x.toUpperCase())
    while(y<x.length){
        if (y%2==1)
        {
            z+=x.at(y).toUpperCase()
        }
        else{
            z+=x.at(y)
        }
        y++
    }
    console.log(z)
    z=""
    z=x.replaceAll("e","E")
    console.log(z)
    const t=x.split("e")
    console.log(t)
}
betu(x)


    