const formatPrice = (price) => {
    return price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY', minimumFractionDigits: 2 });
}

const data = [
    { id: 0, name: 'Hediye Kiti', price: formatPrice(29), image: 'https://images.unsplash.com/photo-1541495532687-d41ee8904943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmZ1bWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
    { id: 1, name: 'Yılbaşı Özel', price: formatPrice(39.90), image: 'https://images.unsplash.com/photo-1575383359917-e585c563a8e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
    { id: 2, name: 'Kart', price: formatPrice(74.90), image: 'https://images.unsplash.com/photo-1526614180703-827d23e7c8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGdpZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
    { id: 3, name: 'Telefon Kılıfı', price: formatPrice(24.90), image: 'https://images.unsplash.com/photo-1592921249123-2dfd435f8690?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBob25lJTIwY2FzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
    { id: 4, name: 'Telefon Kılıfı', price: formatPrice(46.90), image: 'https://images.unsplash.com/photo-1528025157752-38c44e8a0c76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2slMjBnaWZ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60' },
    { id: 5, name: 'Telefon Kılıfı', price: formatPrice(41.90), image: 'https://images.unsplash.com/photo-1630402614103-403d3d093da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxwaG9uZSUyMGNhc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
    { id: 6, name: 'Tablo', price: formatPrice(32.90), image: 'https://images.unsplash.com/photo-1604607543770-b13d69a553da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGNhbnZhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
    { id: 7, name: 'Kalemlik', price: formatPrice(19.90), image: 'https://images.unsplash.com/photo-1526388962-91cb484efdc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNhbnZhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
    { id: 8, name: 'Cam Tablo', price: formatPrice(47.90), image: 'https://images.unsplash.com/photo-1529254479751-faeedc59e78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGNhbnZhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' },
    { id: 9, name: 'Özel Tablo Seti', price: formatPrice(59.90), image: 'https://images.unsplash.com/photo-1564747519286-81fc916daa07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxjYW52YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' },
]

export default data;