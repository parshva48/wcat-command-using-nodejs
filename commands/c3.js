
let fs=require("fs");

function removespaces(tpaths)
{
    let ans="";
    for(let i=0;i<tpaths.length;i++)
    {
      ans+=rspace(tpaths[i]);
     
    }

    return ans;
}
function rspace(path)
{
    let ans="";
    let s=fs.readFileSync(path, 'utf8');
let a=s.split(`
`);

for(let i=0;i<a.length;i++)
{
    if(a[i]!='\r')
    {
       ans+=a[i];
       if(i!=path.length-1)
      ans+='\n';
       
    }
}

return ans;
    
}

module.exports={
    rm:removespaces
}