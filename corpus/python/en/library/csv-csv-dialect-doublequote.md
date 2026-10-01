---
id: "python-en-function-csv-dialect-doublequote"
language: "python"
lang: "en"
category: "function"
name: "Dialect.doublequote"
directive: "attribute"
module: "csv"
source_url: "https://docs.python.org/3/library/csv.html#csv.Dialect.doublequote"
license: "PSF"
updated: "2026-10-01"
---

# Dialect.doublequote

Controls how instances of *quotechar* appearing inside a field should
themselves be quoted.  When `True`, the character is doubled. When
`False`, the *escapechar* is used as a prefix to the *quotechar*.  It
defaults to `True`.

On output, if *doublequote* is `False` and no *escapechar* is set,
`Error` is raised if a *quotechar* is found in a field.
