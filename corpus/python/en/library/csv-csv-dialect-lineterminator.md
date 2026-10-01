---
id: "python-en-function-csv-dialect-lineterminator"
language: "python"
lang: "en"
category: "function"
name: "Dialect.lineterminator"
directive: "attribute"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect.lineterminator"
license: "PSF"
updated: "2026-10-01"
---

# Dialect.lineterminator

The string used to terminate lines produced by the `writer`. It defaults
to `'\r\n'`.

> **Note**
>
> The `reader` is hard-coded to recognise either `'\r'` or `'\n'` as
> end-of-line, and ignores *lineterminator*. This behavior may change in the
> future.
>
