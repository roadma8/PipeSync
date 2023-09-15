const { spawn } = require("child_process");

const writerProcess = spawn("node", ["writer.js"]);
const readerProcess = spawn("node", ["reader.js"]);

// Pipe the writer process stdout to the main process (your terminal)
writerProcess.stdout.pipe(process.stdout);
// Pipe the writer process stdout to the reader process stdin
writerProcess.stdout.pipe(readerProcess.stdin);
