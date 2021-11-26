var coinbase_BTC_bid;
var coinbase_BTC_ask;
var coinbase_ETH_bid;
var coinbase_ETH_ask;
var binance_BTC_bid;
var binance_BTC_ask;
var binance_ETH_bid;
var binance_ETH_ask;

function updateCoinbaseData() {

  // Get BTC sell data
  $.get( "https://api.coinbase.com/v2/prices/BTC-USD/sell", function( data ) {
    coinbase_BTC_bid = parseFloat(data.data.amount);
    $( "#CoinbaseBTCSellText" )
      .append( "Bid: $" + coinbase_BTC_bid );
    }, "json" );

  // Get BTC buy data
  $.get( "https://api.coinbase.com/v2/prices/BTC-USD/buy", function( data ) {
    coinbase_BTC_ask = parseFloat(data.data.amount);
    $( "#CoinbaseBTCBuyText" )
      .prepend( "Ask: $" + coinbase_BTC_ask );
    }, "json" );

  // Get ETH sell data
  $.get( "https://api.coinbase.com/v2/prices/ETH-USD/sell", function( data ) {
    coinbase_ETH_bid = parseFloat(data.data.amount);
    $( "#CoinbaseETHSellText" )
      .append( "Bid: $" + coinbase_ETH_bid );
    }, "json" );

  // Get ETH buy data
  $.get( "https://api.coinbase.com/v2/prices/ETH-USD/buy", function( data ) {
    coinbase_ETH_ask = parseFloat(data.data.amount);
    $( "#CoinbaseETHBuyText" )
      .append( "Ask: $" + coinbase_ETH_ask );
    }, "json" );

}

function updateBinanceData() {

  //Get sell data
  $.get( "https://api.binance.com/api/v3/ticker/bookTicker", function( data ) {
    binance_BTC_bid = parseFloat(data[11].bidPrice);
    binance_ETH_bid = parseFloat(data[12].bidPrice);
    $( "#BinanceBTCSellText" )
      .append( "Bid: $" + binance_BTC_bid );
    $( "#BinanceETHSellText" )
      .append( "Bid: $" + binance_ETH_bid );
    }, "json" );

  //Get buy data
  $.get( "https://api.binance.com/api/v3/ticker/price", function( data ) {
    binance_BTC_ask = parseFloat(data[11].price);
    binance_ETH_ask = parseFloat(data[12].price);
    $( "#BinanceBTCBuyText" )
      .append( "Ask: $" + binance_BTC_ask );
    $( "#BinanceETHBuyText" )
      .append( "Ask: $" + binance_ETH_ask );
    }, "json" );

}

function updateRecommendations() {

  if (coinbase_BTC_ask < binance_BTC_ask) {
    $("#BTCBuyRecommendation").append("Coinbase");
  }
  else {
    $("#BTCBuyRecommendation").append("Binance");
  }

  if (coinbase_ETH_ask < binance_ETH_ask) {
    $("#ETHBuyRecommendation").append("Coinbase");
  }
  else {
    $("#ETHBuyRecommendation").append("Binance");
  }

  if (coinbase_BTC_bid > binance_BTC_bid) {
    $("#BTCSellRecommendation").append("Coinbase");
  }
  else {
    $("#BTCSellRecommendation").append("Binance");
  }

  if (coinbase_ETH_bid > binance_ETH_bid) {
    $("#ETHSellRecommendation").append("Coinbase");
  }
  else {
    $("#ETHSellRecommendation").append("Binance");
  }

}

updateCoinbaseData();
updateBinanceData();
updateRecommendations();
