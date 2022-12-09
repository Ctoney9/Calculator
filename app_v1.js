const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the data-num attribute of the button
    const buttonValue = e.target.getAttribute('data-num');

    // If the button is the "C" button, clear the screen
    if (buttonValue === 'C') {
      screen.value = '';
      return;
    }

    // If the button is the "=" button, evaluate the expression on the screen
    if (buttonValue === '=') {
      try {
        // Use the eval() function to evaluate the expression on the screen
        const result = eval(screen.value);
        screen.value = result;
      } catch (error) {
        // If there is an error, display it on the screen
        screen.value = error.message;
      }
      return;
    }

    // Otherwise, append the button value to the screen
    screen.value += buttonValue;
  });
});