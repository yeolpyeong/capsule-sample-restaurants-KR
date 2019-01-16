//다른 경로의 파일을 가져옵니다.
var fakeData = require("./data/restaurants.js");

module.exports.function = function makeCandidateRestaurant() {
 
  console.log(fakeData);
  
  return fakeData;
}
