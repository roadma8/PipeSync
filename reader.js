process.stdin.on("data", (data) => {
  console.log(`Received data: ${data.toString()}`);
});
