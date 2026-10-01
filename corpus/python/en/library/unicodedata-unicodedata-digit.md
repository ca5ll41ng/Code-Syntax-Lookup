---
id: "python-en-function-unicodedata-digit"
language: "python"
lang: "en"
category: "function"
name: "digit"
signature: "digit(chr, default=None, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.digit"
license: "PSF"
updated: "2026-10-01"
---

# digit

Returns the digit value assigned to the character *chr* as integer.
If no such value is defined, *default* is returned, or, if not given,
`ValueError` is raised::

   >>> unicodedata.digit('\N{SUPERSCRIPT NINE}')
   9
