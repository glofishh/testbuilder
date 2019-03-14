// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //var cardNumber = cardNumber.split (array with individual numbers)
  //iterate over cardNumber string
    //conditional statements
      //Diner's Club:
        //if first two indeces [0][1] === 38 and 39 && cardNumber.length === 14
          //return 'Diner's Club'
      //American Express:
        //if first two indeces [0][1] === 34 || 37 && cardNumber.length === 15
          //return 'American Express'

  var prefix = cardNumber.slice(0, 2);
  var prefixOneDig = cardNumber.slice(0, 1);
  var prefixFourDig = cardNumber.slice(0, 4);
  var prefixThreeDig = cardNumber.slice(0, 3);
  var prefixSixDig = cardNumber.slice(0, 6);
  var cardLength = cardNumber.length;

  if((prefix === '38' || prefix === '39') && cardLength === 14) {
  	return `Diner's Club`;
  }
  if((prefix === '34' || prefix === '37') && cardLength === 15) {
  	return 'American Express';
  }
  if(((['4903', '4905', '4911', '4936', '6333', '6759'].includes(prefixFourDig)) ||
  						                (['564182', '633110'].includes(prefixSixDig))) && 
  						 (cardLength === 16 || cardLength === 18 || cardLength === 19)) {
  	return 'Switch';
  }
  if((['51', '52', '53', '54', '55'].includes(prefix)) && cardLength === 16) {
  	return 'MasterCard';
  } 
  if((prefixFourDig === '6011' || (parseInt(prefixThreeDig) > 643 && parseInt(prefixThreeDig) < 650) || prefix === '65') && [16, 19].includes(cardLength)) {
  	return 'Discover';
  }
  if((['5018', '5020', '5038', '6304'].includes(prefixFourDig)) && (cardLength > 11 && cardLength < 20)) {
  	return 'Maestro';
  } 
  if(((parseInt(prefixThreeDig) > 623 && parseInt(prefixThreeDig) < 627) ||
  				 (parseInt(prefixSixDig) > 622125 && parseInt(prefixSixDig) < 622926) ||
  				 (parseInt(prefixFourDig) > 6281 && parseInt(prefixFourDig) < 6289))  && 
                 (cardLength > 15 && cardLength < 20)) {
  	return 'China UnionPay';
  } 
    if((prefixOneDig === '4') && ([13, 16, 19].includes(cardLength))) {
  	return 'Visa';
  } 
  	return 'Card Not Found';
};
