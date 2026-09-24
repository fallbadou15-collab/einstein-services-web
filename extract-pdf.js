const fs = require("fs");
const { PDFParse } = require("pdf-parse");

(async () => {
  const buf = fs.readFileSync(
    "cahier-des-charges/Cahier des charges Einstein Services .pdf",
  );
  const parser = new PDFParse({ data: new Uint8Array(buf) });
  const result = await parser.getText();
  fs.writeFileSync("cahier.txt", result.text, "utf8");
  console.log("pages:", result.pages?.length, "chars:", result.text.length);
  await parser.destroy();
})().catch((e) => {
  console.error("ERR", e.message);
  process.exit(1);
});
