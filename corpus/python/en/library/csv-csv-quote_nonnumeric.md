---
id: "python-en-function-csv-quote_nonnumeric"
language: "python"
lang: "en"
category: "function"
name: "QUOTE_NONNUMERIC"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.QUOTE_NONNUMERIC"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_NONNUMERIC

Instructs `writer` objects to quote all non-numeric fields.

Instructs `reader` objects to convert all non-quoted fields to type `float`.

> **Note**
>
> Some numeric types, such as `bool`, `~fractions.Fraction`,
> or `~enum.IntEnum`, have a string representation that cannot be
> converted to `float`.
> They cannot be read in the `QUOTE_NONNUMERIC` and
> `QUOTE_STRINGS` modes.
>
