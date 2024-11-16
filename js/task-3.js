function getElementWidth(content, padding, border) {
    // px değerlerini sayıya çevir

    const contentWidth = Number(content.replace("px", ""));
    const paddingWidth = Number(padding.replace("px", "")) * 2; // Her iki kenar için
    const borderWidth = Number(border.replace("px", "")) * 2; // Her iki kenar için

    // Toplam genişliği hesapla
    const totalWidth = contentWidth + paddingWidth + borderWidth;

    // Genişliği px birimiyle döndür
    return `${totalWidth}`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
