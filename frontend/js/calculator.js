const API="http://localhost:5000/api/calculate-price";

async function calculate(){

const product_id=document.getElementById("productId").value;
const quantity=document.getElementById("quantity").value;

const res=await fetch(API,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({product_id,quantity})
});

const data=await res.json();

document.getElementById("result").innerHTML=`

<h3>Result</h3>

<p>Product: ${data.product}</p>
<p>Quantity: ${data.quantity}</p>
<p>Base Price: ${data.basePrice}</p>
<p>Discount: ${data.discountPercentage}%</p>
<p>Total Discount: ${data.discount}</p>
<p>Final Price: ${data.finalPrice}</p>

`;

}