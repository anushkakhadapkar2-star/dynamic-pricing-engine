const API="http://localhost:5000/api/rules";

async function createRule(){

const product_id=document.getElementById("productId").value;
const min_quantity=document.getElementById("minQty").value;
const discount_percentage=document.getElementById("discount").value;

await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({product_id,min_quantity,discount_percentage})
});

alert("Rule Created");

}