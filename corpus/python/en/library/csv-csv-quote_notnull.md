---
id: "python-en-function-csv-quote_notnull"
language: "python"
lang: "en"
category: "function"
name: "QUOTE_NOTNULL"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.QUOTE_NOTNULL"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_NOTNULL

Instructs `writer` objects to quote all fields which are not
`None`.  This is similar to `QUOTE_ALL`, except that if a
field value is `None` an empty (unquoted) string is written.

Instructs `reader` objects to interpret an empty (unquoted) field
as `None` and to otherwise behave as `QUOTE_ALL`.

> *Added in 3.12*
