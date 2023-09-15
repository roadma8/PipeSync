const { spawn } = require("child_process");

const writerProcess = spawn("node", ["writer.js", ...process.argv.slice(2)]);
const readerProcess = spawn("node", ["reader.js"]);

// Pipe the writer process stdout to the main process (your terminal)
writerProcess.stdout.pipe(process.stdout);
// Pipe the writer process stdout to the reader process stdin
writerProcess.stdout.pipe(readerProcess.stdin);

writerProcess.on("error", (error) => {
  console.error("Writer process error:", error);
});

readerProcess.on("error", (error) => {
  console.error("Reader process error:", error);
});

writerProcess.on("exit", (code, signal) => {
  if (code !== 0) {
    console.error(`Writer process exited with code ${code}`);
  }
});
