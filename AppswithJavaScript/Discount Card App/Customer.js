class Customer extends MigrosBase{
    constructor(name,surname,havecard,products){
        super(name,surname,havecard,products);
    }


    calculate(){        //* yukarıdan aldık bütün kontrolleri
        return super.calculate();
    }

}






//* Ram bellek şişmesin diye tekrar eden kısımları base kısmında yazıcaz