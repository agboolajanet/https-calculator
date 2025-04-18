document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calculator-buttons button");
    const clearButton = document.getElementById("clear");

    let currentInput = "";

    const validButtons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
                          '+', '-', '*', '/', '.', '='];

    buttons.forEach(button => {
      const value = button.textContent;

      if (!validButtons.includes(value)) return;

      button.addEventListener("click", () => {
        if (value === "=") {
                    // Change display background to white on any button click (typing)
        display.style.backgroundColor = "#ffffff";

          try {
            currentInput = eval(currentInput).toString();
          } catch {
            currentInput = "Error";
          }
        } else {
          currentInput += value;
        }

        display.value = currentInput;
      });
    });

    clearButton.addEventListener("click", () => {
      currentInput = "";
      display.value = "";
    });
  });