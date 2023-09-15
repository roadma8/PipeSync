process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception in writer.js:", error);
});

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Hello there, simple reader");
} else {
  console.log("Arguments received :", args[0]);
}
