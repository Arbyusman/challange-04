class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
    console.log('jumlah mobil',cars);
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
    return `   
      
    <div class="card " id="card-tampil-mobil" style="height: 100%" >
      <div class="justify-content-center align-items-center d-flex ">
        <img
        id="card-image"
          src="${this.image}"
          class="img-fluid rounded-2  shadow-sm"
          alt="${this.manufacture}"
          style="width: 270px; height: 160px"
        />
      </div>
      <div class="card-body">
        <p id="card-name">Tipe Mobil (${this.model})  </p>
        <h5 class="fw-semibold" id="card-rent">RP ${this.rentPerDay} /hari</h5>
        <p class="card-text" id="card-desc" style="height:20%;">
          ${this.description}
        </p>
        <div>
          <div class="flex-row d-flex">
            <i class="fa-solid fa-users pe-3"> </i>
            <p id="card-capacity">${this.capacity} Orang</p>
          </div>
          <div class="flex-row d-flex">
            <i class="fa-solid fa-gear pe-3"></i>
            <p class="ps-1" id="card-transmision">${this.transmission}</p>
          </div>
          <div class="flex-row d-flex">
            <i class="fa-solid fa-calendar pe-3"></i>
            <p class="ps-1" id="card-year">Tahun ${this.year}</p>
          </div>
        </div>
        <div class="align-self-end">
          <button
            type="button"
            class="btn btn-success fw-bold border-0 px-3 container-fluid"
            style="background: #5cb85f"
          >
            Pilih Mobil
          </button>
        </div>
      </div>
    </div>

      

      
    `;
  }
}
