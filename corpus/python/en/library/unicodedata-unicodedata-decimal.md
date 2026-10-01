---
id: "python-en-function-unicodedata-decimal"
language: "python"
lang: "en"
category: "function"
name: "decimal"
signature: "decimal(chr, default=None, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.decimal"
license: "PSF"
updated: "2026-10-01"
---

# decimal

Returns the decimal value assigned to the character *chr* as integer.
If no such value is defined, *default* is returned, or, if not given,
`ValueError` is raised. For example::

   >>> unicodedata.decimal('\N{ARABIC-INDIC DIGIT NINE}')
   9
   >>> unicodedata.decimal('\N{SUPERSCRIPT NINE}', -1)
   -1
