class MigrosBase{
    discountrate = 20;

    /*
    *   products = [
    * {
    *   price = 10
    *   productName = "Milk"
    * }
    * ]
    */
    
    constructor(name,surname,havecard,products){
        this.name = name;
        this.surname = surname;
        this.havecard = havecard;
        this.products = products;
    }

    calculate(){
        let paidAmount = 0;

        if(this.productsControl(this.products)){
            // sepet dolu
            if(this.havecard){
                // MoneyCard vardır
                this.products.forEach((product)=>{
                    paidAmount +=product.price*((100-this.discountrate)/100);
                })
            }else{
                // yoktur
                this.products.forEach((product)=>{
                    paidAmount +=product.price;
                })

            }

            
        }else{
            alert("You should buy minimume 1 product.");
        }
        return paidAmount;


    }

    productsControl(products){
        if(products != null && products.length>0){
            return true;
        }else{
            return false;
        }

    }
}