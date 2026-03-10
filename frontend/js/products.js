const API="http://localhost:5000/api/products";

async function addProduct(){

const name=document.getElementById("name").value;
const price=document.getElementById("price").value;

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,base_price:price})
});

alert("Product Added");

loadProducts();
}

async function loadProducts(){

const res=await fetch(API);
const data=await res.json();

const table=document.getElementById("productTable");

table.innerHTML="";

data.forEach(p=>{

table.innerHTML+=`
<tr>
<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.base_price}</td>
</tr>
`;

});
}

loadProducts();