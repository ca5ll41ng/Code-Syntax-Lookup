---
id: "python-en-function-csv-quote_minimal"
language: "python"
lang: "en"
category: "function"
name: "QUOTE_MINIMAL"
directive: "data"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.QUOTE_MINIMAL"
license: "PSF"
updated: "2026-10-01"
---

# QUOTE_MINIMAL

Instructs `writer` objects to only quote those fields which contain
special characters such as *delimiter*, *quotechar*, `'\r'`, `'\n'`
or any of the characters in *lineterminator*.
If *doublequote* is `False` and *escapechar* is set,
the *quotechar* is escaped instead of causing the field to be quoted.
