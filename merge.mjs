import PDFMerger from 'pdf-merger-js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mergepdfs = async (p1, p2) => {
  const merger = new PDFMerger();

  await merger.add(p1);
  await merger.add(p2);

  let d = new Date().getTime();
  const outputPath = path.join(__dirname, "public", `${d}.pdf`);

  await merger.save(outputPath);
  return d;
};

export { mergepdfs };
