function echo(value) {
  console.log(typeof value);
  if (typeof value == "string" || typeof value == "number") {
    console.log(value);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

echo("Hello, JavaScript!");
