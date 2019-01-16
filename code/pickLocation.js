var fakeData = require("./data/locations.js");

module.exports.function = function pickLocation (selection) {  
  var locationList = fakeData[selection.candidate.name];
  
  if(!locationList){
    throw fail.checkedError("No Result", "NoResult");  
  }
  
  console.log(locationList);
  
  var result = [
    {
      candidate:{
        name: selection.candidate.name,
        note: selection.candidate.note
      },
      location: locationList[0]
    },
    {
      candidate:{
        name: selection.candidate.name,
        note: selection.candidate.note
      },
      location: locationList[1]
    }
  ];
  
  console.log(result);
  
  return result;
}
