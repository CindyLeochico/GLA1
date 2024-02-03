document.addEventListener("DOMContentLoaded", function () {
  //name
  var h1element = document.createElement("h1");
  h1element.textContent = "Cindy April Leochico";
  h1element.style.color = "#A9A9A9";
  //first number
  var inputnum1 = document.createElement("input");
  inputnum1.type = "text";
  inputnum1.id = "inputnum1";

  var inputnum2 = document.createElement("input");
  inputnum2.type = "text";
  inputnum2.id = "inputnum2";

  var button = document.createElement("button");
  button.textContent = "Add Numbers";
  button.addEventListener("click", CalculateSum);

  var divContainer = document.createElement("div");
  divContainer.style.textAlign = "center";

  var result = document.createElement("div");
  result.id = "result";

  var space = document.createTextNode("\u00A0");
  document.body.appendChild(divContainer);
  divContainer.appendChild(h1element);
  divContainer.appendChild(inputnum1);
  divContainer.appendChild(space);
  divContainer.appendChild(inputnum2);
  divContainer.appendChild(space.cloneNode());
  divContainer.appendChild(button);
});

CalculateSum = () => {
  resetError();
  resetResult();
  resetBorders();

  try {
    var num1 = parseFloat(document.getElementById("inputnum1").value);
    var num2 = parseFloat(document.getElementById("inputnum2").value);

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Inputs must be a valid numbers.");
    }

    var sum = num1 + num2;

    showResult("The sum of " + num1 + " and " + num2 + " is " + sum);
  } catch (e) {
    var errMessage = document.createElement("div");
    errMessage.id = "error-message";
    errMessage.style.color = "red";
    errMessage.style.textAlign = "center";
    errMessage.innerHTML = "<br>" + "Error: " + e;

    inputnum1.style.border = "1px solid red";
    inputnum2.style.border = "1px solid red";

    document.body.appendChild(errMessage);
  }
};

showResult = (resultMessage) => {
  var resultMsg = document.createElement("div");
  resultMsg.id = "result";
  resultMsg.style.textAlign = "center";
  resultMsg.innerHTML = "<br>" + resultMessage;

  document.body.appendChild(resultMsg);
};

resetBorders = () => {
  document.getElementById("inputnum1").style.border = "";
  document.getElementById("inputnum2").style.border = "";
};

resetError = () => {
  var errorMsg = document.getElementById("error-message");
  if (errorMsg) {
    errorMsg.remove();
  }
};

resetResult = () => {
  var resultMsg = document.getElementById("result");
  if (resultMsg) {
    resultMsg.remove();
  }
};
