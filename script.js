var res=fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
console.log(res);
res.then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);
    
    var container=document.createElement('div');
    container.style.width="1200px";
    container.style.display="flex";
    container.style.flexDirection="row";
    container.style.flexWrap="wrap";


    for(var i=0;i<data.length;i++){
        
        

        var box=document.createElement('div');
        box.style.width="250px";
        box.style.height="350px";
        box.style.backgroundColor="white";
        box.style.margin="20px 10px 25px 20px";
        box.style.alignItems="center";

        var img=document.createElement('img');
        img.setAttribute('src',data[i].api_featured_image);
        img.style.width="250px";
        img.style.height="180px";

        var name=document.createElement('p');
        name.innerHTML=data[i].name;
        name.style.fontSize="17px";
        
        box.append(img,name);
        container.append(box);
        document.body.append(container);
    }
}).catch((error)=>console.log(error));