class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    
    
    document.getElementById("card-image").innerHTML = (`${this.image}`);
    document.getElementById("card-image").innerHTML = (`${this.manufacture}`);
    document.getElementById("card-name").innerHTML = (`Tipe Mobil ${this.model}`);
    document.getElementById("card-rent").innerHTML = (`RP ${this.rentPerDay} /hari`);
    document.getElementById("card-desc").innerHTML = (` ${this.description} `);
    document.getElementById("card-transmision").innerHTML = (` ${this.transmission} `);
    document.getElementById("card-capacity").innerHTML = (` ${this.capacity} Orang `);
    document.getElementById("card-year").innerHTML = (`Tahun ${this.year}`);
    

    
 
  return render;
   }
   
}
