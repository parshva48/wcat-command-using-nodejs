let fs=require("fs");
function displaycontent(pathname)
{
    let data = fs.readFileSync(pathname, 'utf8');
    console.log(data);
}

module.exports={
    display:displaycontent
}