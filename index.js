const name="vishal";
console.log(`my name is ${name}`)

var a=[];
for(var i=0;i<=10;i++)
{
    if(i%2==1)
    {
        console.log(i)
    }
}
var no= [1,3,5,6,5,5,6,2,7,3,7,6,2,3,8,6,9];
var res=no.filter(n => n%2==1 )
console.log(res)

var images =[
    {height:2 ,width:3},
    {height:3 ,width:5},
    {height:12 ,width:5}

]
images.forEach(function(a,i)
{ var areas=[];
 areas=(images[i].height * images[i].width)
 console.log(areas)
})
