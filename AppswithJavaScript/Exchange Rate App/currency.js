class Currency {


    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=DwubsVWBQzrAI1rY529XjbZy1rny84BA3XaIujP0&base_currency="
    }


    async  exchange(amount , firstCurrencyOption , secondCurrencyOption){
        const response =    await fetch(`${this.url}${firstCurrencyOption}`);
        const result = await response.json();
        const exchangedResult = amount * result.data[secondCurrencyOption];
    
        return exchangedResult;
        }
}