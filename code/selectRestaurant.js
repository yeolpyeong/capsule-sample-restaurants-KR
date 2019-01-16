module.exports.function = function selectRestaurant (candidate) {
  console.log(candidate);
  
  return {
    candidate:{
      name: candidate.name,
      note: candidate.note
    }
  };
}
