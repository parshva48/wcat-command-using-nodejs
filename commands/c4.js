
function addnumber(s)
{
    let arr = s.toString().replace(/\r\n/g,'\n').split('\n');
let idx=1;
let ans="";
for(let i=0;i<arr.length;i++)
{
   ans+=idx+" "+arr[i];
   ans+='\n';
   idx++;
    
}

return ans;

}

module.exports={
    add:addnumber
}