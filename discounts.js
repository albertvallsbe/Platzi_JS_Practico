const originalPrice = 120;
const discount = 18;

function calculePriceWithDiscount(originalPrice, discount) { 
const ratePriceWithDiscount = 100 - discount;
const priceWidthDiscount = (originalPrice * ratePriceWithDiscount) / 100;

return priceWidthDiscount;
};
 
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 
    
    const inputPrice = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value; 

    const priceWidthDiscount = calculePriceWithDiscount(priceValue, discountValue);
};