// const originalPrice = 120;
// const discount = 18;

function calculePriceWithDiscount(price, discount) {
    const ratePriceWithDiscount = 100 - discount;
    const priceWidthDiscount = (price * ratePriceWithDiscount) / 100;

    return priceWidthDiscount;
};

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWidthDiscount = calculePriceWithDiscount(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultP");
    resultPrice.innerText = "The price with discount is: " + priceWidthDiscount;

};