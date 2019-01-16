module.exports.function = function returnRestaurant (restaurant) {
  console.log(restaurant);
  return {
    restaurant:{
      candidate:{
        name: restaurant.candidate.name,
        note: restaurant.candidate.note
      },
      location: restaurant.location
    }
  };
}
