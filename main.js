#! /usr/bin/env node
let input=process.argv.slice(2);

let displaycontent=require("./commands/c1");
let concat=require("./commands/c2");
let removespaces=require("./commands/c3");
let addnumber=require("./commands/c4");
let withoutspace=require("./commands/c5");
let fs=require("fs");
if(input.length==1)
{
displaycontent.display(input[0]);
}
else{
    let ms=false;
    let mn=false;
    let mb=false;
    let greater=false;
    let dgreater=false;
    let tpaths=[];
    let idx1=0;
    let idx2=0;
  for(let i=0;i<input.length;i++)
  {
      if(input[i]=='-s')
      {
          ms=true;
      }
      else if(input[i]=='-n')
      {
          mn=true;
          idx1=i;
      }
      else if(input[i]=='-b')
      {
          mb=true;
          idx2=i;
      }
      else if(input[i]=='>')
      greater=true;
      else if(input[i]=='>>')
      dgreater=true;
      else{
          tpaths.push(input[i]);
      }
  }
  let ans="";
  let dest="";
  if(mb && mn)
  {
      if(idx1<idx2)
      mb=false;
      else
      mn=false;
  }
  if(greater || dgreater)
  {
      dest=tpaths.pop();
  }
  for(let i=0;i<tpaths.length;i++)
  {
       if(fs.existsSync(tpaths[i])==false)
       {console.log("file does not exist");
       return;}

  }
    if(ms || mb || mn || greater || dgreater)
    {
        if(ms)
        {
           
            ans=removespaces.rm(tpaths);
          
          
        }
        if(mn)
        {
            if(ans=="")
            {
                ans=concat.concatfile(tpaths);
            }
           ans=addnumber.add(ans);
            
            
        }
        if(mb)
        {
            if(ans=="")
            {
                ans=concat.concatfile(tpaths);
            }
           ans=withoutspace.anws(ans);
            
           
        }
        if(greater)
        {
            if(ans.length==0)
            {
                
                let data=concat.concatfile(tpaths);
                fs.writeFile(dest,data,function (err) {
                    if (err) throw err;
                   
                  });
            }
           else
           {
            fs.writeFile(dest,ans,function (err) {
                if (err) throw err;
               
              });
           }

        }
        if(dgreater)
        {
            if(ans.length==0)
            {
               
                let data=concat.concatfile(tpaths);
                fs.appendFile(dest,data, function (err) {
                    if (err) throw err;
                  });
    
            }
           else
           {
            fs.appendFile(dest, ans, function (err) {
                if (err) throw err;
              });

           }
           
        }
        if(greater==false && dgreater==false)
        {
            console.log(ans);
        }
      
    }
    else{
        console.log(concat.concatfile(input));
    }

}
