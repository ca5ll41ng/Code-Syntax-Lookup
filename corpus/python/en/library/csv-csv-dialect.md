---
id: "python-en-function-csv-dialect"
language: "python"
lang: "en"
category: "function"
name: "Dialect"
directive: "class"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect"
license: "PSF"
updated: "2026-10-01"
---

# Dialect

The `Dialect` class is a container class whose attributes contain
information for how to handle doublequotes, whitespace, delimiters, etc.
Due to the lack of a strict CSV specification, different applications
produce subtly different CSV data.  `Dialect` instances define how
`reader` and `writer` instances behave.

All available `Dialect` names are returned by `list_dialects`,
and they can be registered with specific `reader` and `writer`
classes through their initializer (`__init__`) functions like this::

    import csv

    with open('students.csv', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile, dialect='unix')
