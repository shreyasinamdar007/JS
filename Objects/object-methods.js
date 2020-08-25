let restaurant = {
  name: "Kargo",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (Partysize) {
    let seatLeft = this.guestCapacity - this.guestCount;
    return Partysize <= seatLeft;
  },

  seatParty: function (Partysize) {
    this.guestCount = this.guestCount + Partysize;
  },

  removeParty: function (Partysize) {
    this.guestCount = this.guestCount - Partysize;
  },
};

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
