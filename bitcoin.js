

var data = 
{
    "USD_JPY": "95.3744341",
    "USD_USD": "1.0000000", //useless
    "JPY_EUR": "0.0081118", 
    "BTC_USD": "105.7221154", 
    "JPY_BTC": "0.0000866", 
    "USD_EUR": "0.7241118", 
    "EUR_USD": "1.4417975", 
    "EUR_JPY": "147.7237465", 
    "JPY_USD": "0.0104277", 
    "BTC_BTC": "1.0000000", //useless
    "EUR_BTC": "0.0126232", 
    "BTC_JPY": "10822.3727485", 
    "JPY_JPY": "1.0000000", //Useless
    "BTC_EUR": "77.9833166", 
    "EUR_EUR": "1.0000000", //useless
    "USD_BTC": "0.0077279"
};

//triangular arbirage 

var usdybtc = data.USD_JPY * data.JPY_BTC * data.BTC_USD;  //yen as middle currency
var usdebtc = data.USD_EUR * data.EUR_BTC * data.BTC_USD;
var usdyeur = data.USD_JPY * data.JPY_EUR * data.EUR_USD;
var usdbeur = data.USD_BTC * data.BTC_EUR * data.EUR_USD;
var usdeyen = data.USD_EUR * data.EUR_JPY * data.JPY_USD;
var usdbyen = data.USD_JPY * data.JPY_BTC * data.BTC_USD;

console.log(usdybtc)
console.log(usdebtc)
console.log(usdyeur)
console.log(usdbeur)
console.log(usdeyen)
console.log(usdbyen)




var jpyeusd
var jpyebtc
var jpyueur
var jpyubtc
var jpybusd
var jpybeur

var eurjusd
var eurbusd
var eurjbtc
var eurubtc
var eurujpy
var eurjbtc
var eurbjpy
