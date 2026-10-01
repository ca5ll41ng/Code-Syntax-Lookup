---
id: "python-en-function-unicodedata-mirrored"
language: "python"
lang: "en"
category: "function"
name: "mirrored"
signature: "mirrored(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.mirrored"
license: "PSF"
updated: "2026-10-01"
---

# mirrored

Returns the mirrored property assigned to the character *chr* as
integer. Returns `1` if the character has been identified as a "mirrored"
character in bidirectional text, `0` otherwise. For example::

   >>> unicodedata.mirrored('>')
   1
