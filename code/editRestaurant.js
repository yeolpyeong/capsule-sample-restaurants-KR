module.exports.function = function editRestaurant (selection) {
  console.log(selection);
  return {
    candidate: {
      name: selection.candidate.name,
      note: selection.candidate.note
    }
  };
}
