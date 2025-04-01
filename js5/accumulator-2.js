const arr = [1, -2, 3, 4, -5, 6, -7, 8, 9, 10];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        accumulator += arr[i];
    }
}

// console.log(accumulator);