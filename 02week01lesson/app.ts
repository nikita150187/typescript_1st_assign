// Initial count value
let count: number = 0;

// Update the count display
const updateCountDisplay = (): void => {
    const countElement = document.getElementById('count') as HTMLElement;
    countElement.textContent = count.toString();
};

// Increment the count
const increment = () => {
    count += 1;
    updateCountDisplay();
};

// Decrement the count
const decrement = () => {
    count -= 1;
    updateCountDisplay();
};

// Reset the count
const reset = () => {
    count = 0;
    updateCountDisplay();
};

// Attach event listeners to buttons
const incrementButton = document.getElementById('increment-button') as HTMLButtonElement;
const decrementButton = document.getElementById('decrement-button') as HTMLButtonElement;
const resetButton = document.getElementById('reset-button') as HTMLButtonElement;

incrementButton.onclick = increment;
decrementButton.onclick = decrement;
resetButton.onclick = reset;

