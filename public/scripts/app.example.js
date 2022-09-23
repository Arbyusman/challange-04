class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.filterDate = document.getElementById("dateFilter");
    this.filterTime = document.getElementById("timeFilter");
    this.filterPenumpang = document.getElementById("jumlah-penumpang");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    this.clear();
    const data = this.filterCari();
    console.log("Jumlah Mobil :",data);

    data.forEach((Car) => {
      const node = document.createElement("div");
      node.innerHTML = Car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  filterCari() {
    const dateValue = this.filterDate.value;
    const timeValue = this.filterTime.value;
    const capacityValue = this.filterPenumpang.value;
    
    const newDateTime = new Date(`${dateValue} ${timeValue}`);

    return Car.list.filter(
      (car) => car.capacity >= capacityValue && car.availableAt >= newDateTime
    );
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
