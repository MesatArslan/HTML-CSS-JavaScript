

let message =
`
Welcome to Migros
Do you have "MoneyCard" ?
1- Yes
2- No
`

const products = [  //* ürünlerim bir dizi olmalı çünkü dizilerin içinde daha rahat dönebiliyoruz 
    
    { //* dizimizin içindeki kısımlar obje olmalı  "{}" işaret objeyi kastediyor
        productName : "Milk",
        price : 15
    },
    { 
        productName : "Diaper", // Bebek bezi
        price : 100
    },
    { 
        productName : "Cubed Meat", 
        price : 150
    }

]

// true or false
let result = confirm(message);
let paidAmount;
if(result){
    // MoneyCard'ı vardır
    let name = prompt("Enter Name: ");
    let surname = prompt("Enter Surname: ");

    const customer = new Customer(name,surname,result,products);
    paidAmount = customer.calculate();

    alert(`
        Customer Information: ${name} ${surname} 
        Amount to be paid: ${paidAmount}
        `);

}else{
    const customer = new Customer(null,null,result,products);
    paidAmount = customer.calculate();
    alert(`Amount to be paid: ${paidAmount}`);
}