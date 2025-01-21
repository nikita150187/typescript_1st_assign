# Task: Convert JavaScript to TypeScript

## What You Will Do

You will take a small JavaScript app and change it into TypeScript. This will help you practice adding **types** to variables and functions.

---

## Files You Will Work With

1. **index.html**  
   This file shows the layout of a webpage with a counter and buttons.

2. **app.js**  
   This file has the JavaScript code for the counter app.

---

## Step-by-Step Instructions

### 1. Get the Project

1. Clone this project to your computer:
   ```bash
   git clone https://github.com/Sundsgardens-folkhogskola/Backend.git
   ```
2. Create a new branch for your work:
   ```bash
   git checkout -b 01week01lesson
   ```

---

### 2. Create Your Own TypeScript File

1. Create a new file called **app.ts** in the same folder as **app.js**.
2. Copy the code from **app.js** into **app.ts**.

---

### 3. Add TypeScript to the Code

1. Add **types** to the variables (for example, `let count: number;`).
2. Add **types** to the function inputs and outputs.

---

### 4. Update the HTML File

Make sure the **index.html** file points to the new **app.js** file.  
You will do this after you compile the TypeScript file into JavaScript.

---

### 5. Compile the TypeScript Code

1. Open your terminal or command prompt.
2. Run the following command to compile the code:
   ```bash
   tsc app.ts
   ```
3. This will create a new **app.js** file. Replace the old **app.js** file with this one.

---

### 6. Upload Your Work

1. Save your work by adding it to Git:
   ```bash
   git add .
   git commit -m "Converted JavaScript to TypeScript"
   ```
2. Push your changes to the branch you created:
   ```bash
   git push origin 01week01lesson
   ```

---

## Notes

- Make sure you have TypeScript installed. If you don’t, install it with:
  ```bash
  npm install -g typescript
  ```
- Check your work by opening **index.html** in your browser.
- If you make a mistake, check the TypeScript error messages. They will help you fix the problem.

---

## Hint for Using TypeScript with HTML

When working with HTML elements, you may need to tell TypeScript the type of an element.  
For example:

```typescript
(document.getElementById("increment-button") as HTMLElement).onclick =
  increment;
```

This tells TypeScript that the element with the ID `increment-button` is an HTML element and allows you to use its properties and methods.

---

### Example of Adding Types

Here is a simple example to help you:

#### JavaScript

```javascript
let count = 0;

function add(x, y) {
  return x + y;
}
```

#### TypeScript

```typescript
let count: number = 0;

function add(x: number, y: number): number {
  return x + y;
}
```
