---
id: "python-en-function-unicodedata-isxidstart"
language: "python"
lang: "en"
category: "function"
name: "isxidstart"
signature: "isxidstart(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.isxidstart"
license: "PSF"
updated: "2026-10-01"
---

# isxidstart

Return `True` if *chr* is a valid identifier start per the
[Unicode Standard Annex #31](https://www.unicode.org/reports/tr31/),
that is, it has the `XID_Start` property. Return `False` otherwise.
For example::

   >>> unicodedata.isxidstart('S')
   True
   >>> unicodedata.isxidstart('0')
   False

> *Added in 3.15*
