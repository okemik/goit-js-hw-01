function getShippingMessage(country, price, deliveryFee) {
    // Toplam maliyeti hesapla

    const totalPrice = price + deliveryFee;

    // Mesajı oluştur
    const message = `Shipping to ${country} will cost ${totalPrice} credits`;

    // Mesajı döndür
    return message;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
