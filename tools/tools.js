import { readFile, writeFile } from 'fs/promises';

try {
  const data = await readFile('./quotes.json', 'utf8');
  const quotes = JSON.parse(data);
  const gotama = quotes.filter((quote) => quote.author === 'Gautama Buddha');
  console.log(gotama);

  await writeFile('./gotama.json', JSON.stringify(gotama, null, 2));

} catch (err) {
  console.error(err);
}