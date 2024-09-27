

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];

  // Tulis code-mu disini
  // 1. melakukan filter data 
  for (let i=0; i < cars.length; i++){
    if (cars[i].available) {
      result.push(cars[i]);
    }
  }
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}

filterCarByAvailability(carData);