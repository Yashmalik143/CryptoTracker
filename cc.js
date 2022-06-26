const form=document.querySelector('#searchform');
//const form=$("form");
const res=document.querySelector('#rrr');

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  const ctype = form.elements.coinType.value;
  fetchprice(ctype);
}

);

const fetchprice = async(ctype) =>{
//  console.log(ctype);
  const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=USD`);
console.log(r.data.coin.price);


const price = r.data.coin.price;
const volume = r.data.coin.volume;
const change = r.data.coin.priceChange1d;
const base = r.data.coin.name;
const target = "IND";
var col= "green";
    if(change<0){
        col = "red";
      }
//console.log(volume);
res.innerHTML = `<table class="p-4 col-md-7 " border="1px" border-radius="50%" style="background-color: white; font-weight: 700;" id="resTable">
    <tr  style="color: #14213d; background-color:#abbce0">

          <td>Property</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>${base}</td>
          <td>${price}</td>
        </tr>
        <tr>
          <td>Volume</td>
          <td >${volume}</td>
        </tr>
        <tr>
          <td>change</td>
          <td >${change}</td>
        </tr>`;
};
