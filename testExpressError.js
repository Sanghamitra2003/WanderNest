const ExpressError = require("./utils/ExpressError");

try {
    const err = new ExpressError(404, "Page Not Found!");
    console.log("Error created successfully:");
    console.log("Name:", err.name);
    console.log("Status Code:", err.statusCode);
    console.log("Message:", err.message);
    console.log("Stack:", err.stack.split("\n")[0]); // first line of stack
} catch (e) {
    console.error("Crash hua:", e);
}
