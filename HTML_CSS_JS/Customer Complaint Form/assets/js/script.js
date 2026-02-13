const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNumberInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintFieldset = document.getElementById("complaint-description-container");
const complaintOptionsGroup = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionFieldset = document.getElementById("solution-description-container");
const solutionRadioGroup = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const submitFormBtn = document.getElementById("submit-btn");
const form = document.querySelector("form");
const areValidInputs = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false,
  };

function validateForm() {
  validateFullName({ target: fullNameInput });
  validateEmail({ target: emailInput });
  validateOrderNumber({ target: orderNumberInput });
  validateProductCode({ target: productCodeInput });
  validateQuantity({ target: quantityInput });
  validateComplaintGroup();
  validateSolutionGroup();
  validateComplaintsDescription({ target: complaintDescription });
  validateSolutionDescription({ target: solutionDescription });
  return areValidInputs;
}

function isValid(formResults) {
  return Object.values(formResults).every(Boolean);
}

function handleFormSubmit(e) { 
  const validInputsForm = validateForm(); 
  const validForm = isValid(validateForm()); 
  if (!validForm) { 
    Object.entries(validInputsForm).forEach(([key, value]) => { 
      if (!value) { 
        const el = document.getElementById(key); 
        if (el) { 
          el.style.borderColor = "red"; 
          el.style.borderColor = "green"; } 
        } 
      }); 
    return; 
  } 
}

function validateField(e, regex, key) {
  const isValid = regex.test(e.target.value.trim());
  
  isValid
  ? e.target.style.borderColor = "green"
  : e.target.style.borderColor = "red";
  
  areValidInputs[key] = isValid;
}

function validateFullName(e) {
  validateField(e, /^[a-z']+( [a-z']+)*$/i, "full-name");
}

function validateEmail(e) {
  validateField(e, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i, "email");
}

function validateOrderNumber(e) {
  validateField(e, /^2024\d{6}$/, "order-no");
}

function validateProductCode(e) {
  validateField(e, /^[a-z]{2}\d{2}-[a-z]\d{3}-[a-z]{2}\d$/i, "product-code");
}

function validateQuantity(e) {
  validateField(e, /^[1-9]\d*$/, "quantity");
}

function validateComplaintGroup() {
  const checkboxes = document.querySelectorAll("#complaints-group input[type='checkbox']");
  const isValid = [...checkboxes].some(cb => cb.checked);
  const isOther = [...checkboxes].some(cb => cb.value === "other" && cb.checked);

  isValid
  ? complaintOptionsGroup.style.borderColor = "green"
  : complaintOptionsGroup.style.borderColor = "red";

  complaintFieldset.classList.toggle("hidden", !isOther);

  areValidInputs["complaints-group"] = isValid;
}

function validateSolutionGroup() {
  const checkboxes = document.querySelectorAll("#solutions-group input[type='radio']");
  const isValid = [...checkboxes].some(cb => cb.checked);
  const isOther = [...checkboxes].some(cb => cb.value === "other" && cb.checked);

  solutionFieldset.classList.toggle("hidden", !isOther);

  isValid
  ? solutionRadioGroup.style.borderColor = "green"
  : solutionRadioGroup.style.borderColor = "red";

  areValidInputs["solutions-group"] = isValid;
}

function validateDescriptions(e, regex, key, isRequired = true) {
  if (!isRequired) {
    areValidInputs[key] = true;
    return;
  }
  
  const isValid = regex.test(e.target.value.trim());
  
  isValid
  ? e.target.style.borderColor = "green"
  : e.target.style.borderColor = "red";

  areValidInputs[key] = isValid;
}

function validateComplaintsDescription(e) {
  const isOther = [...document.querySelectorAll("#complaints-group input[type='checkbox']")].some(cb => cb.value === "other" && cb.checked);
  validateDescriptions(e, /.{20,}/i, "complaint-description", isOther);
}

function validateSolutionDescription(e) {
  const isOther = [...document.querySelectorAll("#solutions-group input[type='radio']")].some(cb => cb.value === "other" && cb.checked);
  validateDescriptions(e, /.{20,}/i, "solution-description", isOther);
}


fullNameInput.addEventListener("change", validateFullName);
emailInput.addEventListener("change", validateEmail);
orderNumberInput.addEventListener("change", validateOrderNumber);
productCodeInput.addEventListener("change", validateProductCode);
quantityInput.addEventListener("change", validateQuantity);
complaintOptionsGroup.addEventListener("change", validateComplaintGroup);
solutionRadioGroup.addEventListener("change", validateSolutionGroup);
complaintDescription.addEventListener("input", validateComplaintsDescription);
solutionDescription.addEventListener("input", validateSolutionDescription);
form.addEventListener("submit", handleFormSubmit);