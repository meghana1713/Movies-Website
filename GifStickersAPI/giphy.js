let APIKEY="nB7jdfgmREyBnIXmwDDxfqAr1aJRKzaA"
const main=async()=>{//async function using arrow function which is similar to async function main(){}
try{
    let response=await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`);
    let data= await response.json();//use to convert object format from json format
console.log(data);//in this data object there are another object called data as property which is an array of object  to get the result og gif's
//console.log(data.data);
appendToDom(data.data);//array of object
}
catch(error){
    console.log("error:",error)
}
}

const appendToDom=(data)=>{
    let gifcontent=document.getElementById("gif");//gifcontent it is the reference for this element 
     
    let stickerscontent=document.getElementById("stickers");
    gifcontent.innerHTML="";
    stickerscontent.innerHTML="";// this empty string use to make the content to be erase in this particular element
let maincon=document.getElementById("maincon");
maincon.innerHTML="";
    data.forEach((element)=>{
        let image= document.createElement("img");
        image.src=element.images.downsized.url;
        image.addEventListener("click",()=>{
            detail_gif(element.id);
        })
     maincon.append(image);
  
    });
}
main();//no need to click home buton to get gifs directly from this line when we load the page it directly gifs loads
let detail_gif=(id)=>{
    localStorage.setItem("detailslist:",JSON.stringify(id));
    window.location.href="/gif_details.html";
}
let gif= async()=>{
let query=document.getElementById("Search").value;
if(query==""){
    alert("please provide input");
}
else{
    try{
    let url=`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}`
    let response=await fetch(url);
    let data= await response.json();
    appendToDom(data.data);
    }
    catch(error){
        console.log(error);
    }
}
}
