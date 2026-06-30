const form = document.querySelector("form");

const rules = {
  name: [{ name: "required" }, { name: "minlength", n: 8 }],
  email: [
    { name: "required" },
    {
      name: "email",
      emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
  ],
  phone: [
    { name: "required" },
    { name: "minlength", n: 10 },
    { name: "maxlength", n: 10 },
  ],
  dob: [{ name: "required" }],
  age: [{ name: "custom", fn: (val) => Number(val) >= 18 }],

  linkedin: [{ name: "required" }],
  username: [{ name: "required" }],
  password: [
    { name: "required" },
    {
      name: "pattern",
      regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    },
  ],
  confirmpassword: [
    { name: "required" },
    { name: "match", otherField: "password" },
    {
      name: "pattern",
      regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    },
  ],
};

class FormValidator {
  constructor(form, rules) {
    this.form = form;
    this.rules = rules;
  }

  validate(field) {
    const fieldRules = this.rules[field.id];
    console.log(fieldRules);
    const input = field;
    if (!input) return;

    const value = input.value;
    const span = input.nextElementSibling;

    let fieldIsValid = true;
    let errorMessage = "";

    for (const rule of fieldRules) {
      let ruleIsValid = true;

      switch (rule.name) {
        case "required":
          ruleIsValid = value.trim() !== "";
          if (!ruleIsValid) errorMessage = "This field is required";
          break;
        case "minlength":
          ruleIsValid = value.length >= rule.n;
          if (!ruleIsValid)
            errorMessage = `Minimum length is ${rule.n} characters`;
          break;
        case "maxlength":
          ruleIsValid = value.length <= rule.n;
          if (!ruleIsValid)
            errorMessage = `Maximum length is ${rule.n} characters`;
          break;
        case "pattern":
          ruleIsValid = rule.regex.test(value);
          if (!ruleIsValid) errorMessage = "Invalid format";
          break;
        case "email":
          const emailRegex = rule.emailRegex;
          ruleIsValid = emailRegex.test(value);
          if (!ruleIsValid) errorMessage = "Invalid email address";
          break;
        case "match":
          const target = this.form.elements[rule.otherField];
          ruleIsValid = value === target.value;
          if (!ruleIsValid) errorMessage = "Mismatch in fields";
          break;
        case "custom":
          ruleIsValid = rule.fn(value);
          if (!ruleIsValid)
            errorMessage = "Invalid input: age must be minimum 18";
          break;
      }

      if (!ruleIsValid) {
        fieldIsValid = false;
        break;
      }
    }

    if (!fieldIsValid) {
      input.classList.add("is-invalid");
      input.classList.remove("is-valid");
      if (span) span.textContent = errorMessage;
    } else {
      input.classList.add("is-valid");
      input.classList.remove("is-invalid");
      if (span) span.textContent = "";
    }

    return fieldIsValid;
  }

  validateAll() {
    let result;
    Object.keys(this.rules).forEach((key) => {
      result ^= this.validate(this.form[key]);
    });
    return result;
  }
}

const validator = new FormValidator(form, rules);

form.addEventListener(
  "blur",
  (e) => {
    console.log(e.target);
    e.preventDefault();
    validator.validate(e.target);
  },
  true,
);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validator.validateAll()) {
    alert("Form submitted successfully!");
  }
});
