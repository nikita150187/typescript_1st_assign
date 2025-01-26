// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
    //const countElement = document.getElementById('count') as HTMLElement;
    const countElement = document.getElementById('count')

    if (!countElement) {
        console.error("Could not find countElement");
        return;
    }
    countElement.textContent = count.toString();
};

// Increment the count
const increment = (): void => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = (): void => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = (): void => {
    count = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
const incrementButton = document.getElementById('increment-button');
const decrementButton = document.getElementById('decrement-button');
const resetButton = document.getElementById('reset-button');


if (incrementButton && decrementButton && resetButton) {
  
    incrementButton.onclick = increment;
    decrementButton.onclick = decrement;
    resetButton.onclick = reset;
} else {
    console.error('One or more buttons not found');
}