let cart_item=JSON.parse(localStorage.getItem("cart_item"))||[];

// creating function
 cart_item.forEach(function(el,i){
    let div=document.createElement("div");
    let hr=document.createElement("hr")
    document.querySelector("#cart").append(div,hr)
    let img=document.createElement("img");
    img.src=el.image_url
    let title=document.createElement("p")
    title.innerText=el.name
    let price=document.createElement("h2")
    price.innerText=el.price;
    let Delete=document.createElement("p")
    Delete.innerText="Delete Item"
    Delete.addEventListener("click",function(event){
        event.target.parentNode.remove()
        Delete_Item(i)
    })
    div.append(img,title,price,Delete)
 })
 let p=document.createElement("p");
    p.innerText=cart_item.length
    document.querySelector("h2>div").append(p)
   
    function Delete_Item(i){
        cart_item.splice(i,1);
        localStorage.setItem("cart_item",JSON.stringify(cart_item))
        window.location.reload() 
    }