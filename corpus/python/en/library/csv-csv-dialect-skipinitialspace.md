---
id: "python-en-function-csv-dialect-skipinitialspace"
language: "python"
lang: "en"
category: "function"
name: "Dialect.skipinitialspace"
directive: "attribute"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect.skipinitialspace"
license: "PSF"
updated: "2026-10-01"
---

# Dialect.skipinitialspace

When `True`, spaces immediately following the *delimiter* are ignored.
The default is `False`.  When combining `delimiter=' '` with
`skipinitialspace=True`, unquoted empty fields are not allowed.
