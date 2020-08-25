let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan === true && isGuestTwoVegan === true) {
  console.log("Offer Vegan Menu");
} else if (isGuestOneVegan === true || isGuestTwoVegan === true) {
  console.log("Offer Both Menus");
} else {
  console.log("Offer Non Vegan Menu");
}
