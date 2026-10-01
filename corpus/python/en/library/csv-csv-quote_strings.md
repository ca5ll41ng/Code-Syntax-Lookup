---
id: "python-en-function-csv-quote_strings"
language: "python"
lang: "en"
category: "function"
name: "QUOTE_STRINGS"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.QUOTE_STRINGS"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_STRINGS

Instructs `writer` objects to always place quotes around fields
which are strings.  This is similar to `QUOTE_NONNUMERIC`, except that if a
field value is `None` an empty (unquoted) string is written.

Instructs `reader` objects to interpret an empty (unquoted) string as `None` and
to otherwise behave as `QUOTE_NONNUMERIC`.

> *Added in 3.12*
