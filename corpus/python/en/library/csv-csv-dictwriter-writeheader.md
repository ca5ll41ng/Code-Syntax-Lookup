---
id: "python-en-function-csv-dictwriter-writeheader"
language: "python"
lang: "en"
category: "function"
name: "DictWriter.writeheader"
signature: "DictWriter.writeheader()"
directive: "method"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.DictWriter.writeheader"
license: "PSF"
updated: "2026-10-01"
---

# DictWriter.writeheader

Write a row with the field names (as specified in the constructor) to
the writer's file object, formatted according to the current dialect. Return
the return value of the `csvwriter.writerow` call used internally.

> *Added in 3.2*

> *Changed in 3.8*: :meth:`writeheader` now also returns the value returned by the :meth:`csvwriter.writerow` method it uses internally.
