

function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect? side effect (efek samping) merujuk pada perubahan keadaan atau interaksi dengan dunia luar yang terjadi saat menjalankan sebuah fungsi atau metode, di luar nilai yang dikembalikannya. 
  const result = [...cars];

  // Tulis code-mu disini
  // Bubble sort implementation
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j].year < result[j + 1].year) {
        // Swap cars if the current one is older than the next one
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  console.log("Sorted cars list by year descending:", result);
  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}

sortCarByYearDescendingly(cars);