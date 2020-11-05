const data = {
    location: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.location.push(this._location); 
    }
}

//code that will use data object 

data.location = 'Philadelphia';
data.location = 'New York';
console.log(data);