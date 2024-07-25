//your JS code here. If required.
// script.js

// Get references to the input and output elements
const inputElement = document.getElementById('ip');
const outputElement = document.getElementById('output');
const startButton = document.getElementById('btn');

function delay(ms)
{
	return new Promise((resolve) => 
		{
           setTimeout(() => resolve(), 2000);
        });
}
// Event listener for button click
startButton.addEventListener('click', () => {
  // Retrieve the user-provided number from the input
  let result = parseFloat(inputElement.value);

  // Create a promise that resolves after 2 seconds with the user-provided number
  const initialPromise = new Promise((resolve) => {
    setTimeout(() => resolve(userNumber), 2000);
  });

  // Chain promises to perform the specified operations
  delay(2000)
	  .then(() => {
      // Multiply the number by 2
	   outputElement.textContent = `Result: ${result}`;
	   return delay(1000);
       })
	  .then(() => {
      // Multiply the number by 2
       result *= 2;
	   outputElement.textContent = `Result: ${result}`;
	   return delay(1000);
      })
     .then(() => {
      // Subtract 3 from the result
        result -= 3;
		outputElement.textContent = `Result: ${result}`;
	    return delay(1000);
      })
     .then(() => {
      // Divide the result by 2
       result /= 2;
	   outputElement.textContent = `Result: ${result}`;
	   return delay(1000);
     })
    .then(() => {
      // Add 10 to the result
       result +=10;
	   outputElement.textContent = `Final Result: ${result}`;
    })
    .catch((error) => {
      console.error('An error occurred:', error);
      outputElement.textContent = 'An error occurred. Please try again.';
    });
});
