---
id: "python-en-function-csv-dialect-escapechar"
language: "python"
lang: "en"
category: "function"
name: "Dialect.escapechar"
directive: "attribute"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect.escapechar"
license: "PSF"
updated: "2026-10-01"
---

# Dialect.escapechar

A one-character string used by the writer to escape characters that
require escaping:

   * the *delimiter*, the *quotechar*, `'\r'`, `'\n'` and any of the
     characters in *lineterminator* are escaped if *quoting* is set to
     `QUOTE_NONE`;
   * the *quotechar* is escaped if *doublequote* is `False`;
   * the *escapechar* itself.

On reading, the *escapechar* removes any special meaning from
the following character. It defaults to `None`, which disables escaping.

> *Changed in 3.10*: Previously the *escapechar* itself was not escaped, which lost it on reading.

> *Changed in 3.11*: An empty *escapechar* is not allowed.
