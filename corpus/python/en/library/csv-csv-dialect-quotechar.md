---
id: "python-en-function-csv-dialect-quotechar"
language: "python"
lang: "en"
category: "function"
name: "Dialect.quotechar"
directive: "attribute"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect.quotechar"
license: "PSF"
updated: "2026-10-01"
---

# Dialect.quotechar

A one-character string used to quote fields containing special characters,
such as the *delimiter* or the *quotechar*, or which contain new-line
characters (`'\r'`, `'\n'` or any of the characters in *lineterminator*).
It defaults to `'"'`.
Can be set to `None` to prevent escaping `'"'` if *quoting* is set
to `QUOTE_NONE`.

> *Changed in 3.11*: An empty *quotechar* is not allowed.
