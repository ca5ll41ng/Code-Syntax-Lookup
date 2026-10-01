---
id: "python-en-function-unicodedata-name"
language: "python"
lang: "en"
category: "function"
name: "name"
signature: "name(chr, default=None, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.name"
license: "PSF"
updated: "2026-10-01"
---

# name

Returns the name assigned to the character *chr* as a string. If no
name is defined, *default* is returned, or, if not given, `ValueError` is
raised. For example::

   >>> unicodedata.name('½')
   'VULGAR FRACTION ONE HALF'
   >>> unicodedata.name('\uFFFF', 'fallback')
   'fallback'
