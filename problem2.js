let x="naman";
let bag="";
for(let i=x.length-1;i>=0;i--){
    bag=bag+x[i]
}
if(bag==x){
    console.log("it is palendrom")
}
else{
    console.log("it is not palendrom")
}
