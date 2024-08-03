const phones = [{
    name: 'nokia', camera:12, stroge:32, price:1200, colour:'red'
}]

[{name: 'HTC', camera:12, stroge:64, price:100, colour:'blue'
}]

function cheapPhone(phones){
    let cheap = phones[0];
    for (i = 0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheap.price){
            cheap = phone;
        }
    }
}

const slect = cheapPhone(phones);
console.log(slect);

