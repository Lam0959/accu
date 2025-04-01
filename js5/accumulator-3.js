const arr = [
    "JS",         
    "Python",      
    "C",          
    "Ruby",       
    "Java",       
    "Go",         
    "PHP",        
    "C++",        
    "Swift",       
    "Rust"         
];


let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        accumulator.push(arr[i]);
    }
}

// console.log(accumulator);