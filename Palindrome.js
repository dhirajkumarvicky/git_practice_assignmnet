let str="madam";
let n=str.length
let bag=""

for(let i=n-1;i>0;i++)
{
    bag+=str[i]
}
if(str=bag)
{
    console.log("Palindrome")
}
else
{
    console.log("Not Palindrome")
}