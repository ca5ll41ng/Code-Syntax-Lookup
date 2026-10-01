---
id: "python-en-function-unicodedata-numeric"
language: "python"
lang: "en"
category: "function"
name: "numeric"
signature: "numeric(chr, default=None, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.numeric"
license: "PSF"
updated: "2026-10-01"
---

# numeric

Returns the numeric value assigned to the character *chr* as float.
If no such value is defined, *default* is returned, or, if not given,
`ValueError` is raised::

   >>> unicodedata.numeric('½')
   0.5
