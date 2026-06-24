class ValidationError extends Error {
  constructor(statusCode, message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.statusCode = statusCode;
  }
}

class TypeError extends Error {
  constructor(statusCode, message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.statusCode = statusCode;
  }
}

class RangeError extends Error {
  constructor(statusCode, message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
    this.statusCode = statusCode;
  }
}
function parseUserInput(email) {
  if (typeof email !== "string") {
    throw new TypeError(401, ": Email should be a string ", "email");
  }

  if (email.length < 10) {
    throw new RangeError(402, ": Minimum length of 10 ", "email");
  }
  if (!email.includes("@")) {
    throw new ValidationError(404, ": Email should have '@' ", "email");
  }
}

try {
  parseUserInput(123);
} catch (e) {
  if (e instanceof TypeError) {
    console.error("invalid " + e.statusCode + e.message + e.field);
  }
  if (e instanceof RangeError) {
    console.error("invalid " + e.statusCode + e.message + e.field);
  }
  if (e instanceof ValidationError) {
    console.error("invalid " + e.statusCode + e.message + e.field);
  }
}

const overlayObj = document.getElementById("overlay");

setTimeout(function () {
  notThere();
}, 0);

 window.onerror = (...e) => {
   overlayObj.innerHTML = e;
 };

  
const overlay = document.getElementById("overlay_1");

Promise.reject(new Error("fail"));
window.addEventListener("unhandledrejection", (event) => {
  overlay.innerHTML = event.reason;
});
