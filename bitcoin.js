    
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
    
    // //triangular arbirage 
  var crossrates={
    //USD
        "usdybtc" : data.USD_JPY * data.JPY_BTC * data.BTC_USD - (data.USD_BTC),
        "usdebtc" : data.USD_EUR * data.EUR_BTC * data.BTC_USD - (data.USD_BTC),
        "usdyeur" : data.USD_JPY * data.JPY_EUR * data.EUR_USD - (data.USD_EUR),
        "usdbeur" : data.USD_BTC * data.BTC_EUR * data.EUR_USD - (data.USD_EUR),
        "usdeyen" : data.USD_EUR * data.EUR_JPY * data.JPY_USD - (data.USD_JPY),
        "usdbyen" : data.USD_JPY * data.JPY_BTC * data.BTC_USD - (data.USD_JPY),
            //JPY
        "jpyeusd" : data.JPY_EUR * data.EUR_USD * data.USD_JPY - (data.JPY_USD),
        "jpyebtc" : data.JPY_EUR * data.EUR_BTC * data.BTC_JPY - (data.JPY_BTC),
        "jpyueur" : data.JPY_USD * data.USD_EUR * data.EUR_JPY - (data.JPY_EUR),
        "jpyubtc" : data.JPY_USD * data.USD_BTC * data.BTC_JPY - (data.JPY_BTC),
        "jpybusd" : data.JPY_BTC * data.BTC_USD * data.USD_JPY - (data.JPY_USD),
        "jpybeur" : data.JPY_BTC * data.BTC_EUR * data.EUR_JPY - (data.JPY_EUR),
            //EUR
        "eurjusd" : data.EUR_JPY * data.JPY_USD * data.USD_EUR - (data.EUR_USD),
        "eurjbtc" : data.EUR_JPY * data.JPY_BTC * data.BTC_EUR - (data.EUR_BTC),
        "eurbusd" : data.EUR_BTC * data.BTC_USD * data.USD_EUR - (data.EUR_USD),
        "eurbjpy" : data.EUR_BTC * data.BTC_JPY * data.JPY_EUR - (data.EUR_JPY),
        "eurubtc" : data.EUR_USD * data.USD_BTC * data.BTC_EUR - (data.EUR_BTC),
        "eurujpy" : data.EUR_USD * data.USD_JPY * data.JPY_USD - (data.EUR_JPY),
            //BTC
        "btcueur" : data.BTC_USD * data.USD_EUR * data.EUR_BTC - (data.BTC_EUR),
        "btcujpy" : data.BTC_USD * data.USD_JPY * data.JPY_BTC - (data.BTC_JPY),
        "btcjeur" : data.BTC_JPY * data.JPY_EUR * data.EUR_BTC - (data.BTC_EUR),
        "btcjusd" : data.BTC_JPY * data.JPY_USD * data.USD_BTC - (data.BTC_USD),
        "btceusd" : data.BTC_EUR * data.EUR_USD * data.USD_BTC - (data.BTC_USD),
        "btcejpy" : data.BTC_EUR * data.EUR_JPY * data.JPY_BTC - (data.BTC_JPY),
    };
