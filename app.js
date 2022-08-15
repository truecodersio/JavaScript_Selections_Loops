console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 
for (let i=1;i<=100;i++)
{
    if( i%2 == 0 ) {
     continue;
    }else {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

 
for (let j=1;j<=100;j++)
{
    if (j%3==0 && j%5==0)
    {console.log("FIZZBUZZ",j);}
    else if (j%5==0)
   { console.log("BUZZ",j);}
    else if (j%3==0 )
   { console.log("FIZZ",j);}
    // else {continue; }
}
console.log("EXERCISE 3:\n==========\n");
let x=1;

let h=1;
while(h<=100){
    if (h%3==0 && h%5==0)
    {console.log("FIZZBUZZ",h);}
    else if (h%5==0)
   { console.log("BUZZ",h);}
    else if (h%3==0 )
   { console.log("FIZZ",h);}
   h++;

}
console.log("EXERCISE 4:\n==========\n");

let value =Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n =Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for(let f=0;f<=n;f++)
{
    if(f==value)
    {console.log("Found value",f);
    break;}
    else if(f==n) {
        console.log("Did not find value");
    }

}



console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
for(start=1;start<=m;start++)
{
    if (start%3==0 && start%5==0)
    {console.log("FizzDivisorBuzzDivisor",start);}
    else if (start%5==0)
   { console.log("buzzDivisor",start);}
    else if (start%3==0 )
   { console.log("FizzDivisor",start);}

}  