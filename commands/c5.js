function addnumberwithoutspace(s)
{
    let arr = s.toString().replace(/\r\n/g,'\n').split('\n');
let idx=1;
console.log(arr);
let ans="";
for(let i=0;i<arr.length;i++)
{
    if(arr[i]!=``){
   ans+=idx+" "+arr[i];
   ans+='\n';
   idx++;
    }
    else
    {
        ans+='\n';
    }
}

return ans;

}

module.exports={
    anws:addnumberwithoutspace
}