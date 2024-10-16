// let input = document.getElementById("inputbox");
// let buttons = document.querySelectorAll("button");

// let string = "";
// let arr = Array.from(buttons);

// arr.forEach(button => {
//     button.addEventListener("click", (e) => {
//         if (e.target.innerHTML == "=") {
//             try {
//                 string = eval(string.replace('%', '/100')); // treats % as percentage
//                 input.value = string;
//             } catch {
//                 input.value = "Error"; // handle invalid expressions
//             }
//         }
//         else if (e.target.innerHTML == "AC") {
//             string = "";
//             input.value = string;
//         }
//         else if (e.target.innerHTML == "Del") {
//             string = string.substring(0, string.length - 1);
//             input.value = string;
//         }
//         else {
//             string += e.target.innerHTML;
//             input.value = string;
//         }
//     });
// });


let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            try {
                // Evaluate the expression
                let result = eval(string.replace('%', '/100'));

                // Limit the result to 3 decimal places if it contains a decimal point
                if (typeof result === "number" && result.toString().includes('.')) {
                    result = result.toFixed(3);
                }
                
                input.value = result;
                string = result.toString(); // Update string for further operations
            } catch {
                input.value = "Error"; // Handle invalid expressions
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "Del") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            // Append the button clicked to the string
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

