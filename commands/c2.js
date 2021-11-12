let fs=require("fs");
let ans="";
function concatination(allpaths)
{
    for(let i=0;i<allpaths.length;i++)
    {
        ans+=fs.readFileSync(allpaths[i], 'utf8');
        if(i!=allpaths.length-1)
        ans+='\n';
    }
    return ans;
    
}



module.exports={
    concatfile:concatination
}