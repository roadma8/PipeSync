process.stdin.on("data", (data) => {
  try {
    const jsonData = JSON.parse(data.toString());
    console.log(`Received data: ${jsonData.message}`);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }
});
