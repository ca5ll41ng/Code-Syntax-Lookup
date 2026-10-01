---
id: "python-en-function-unicodedata-isxidcontinue"
language: "python"
lang: "en"
category: "function"
name: "isxidcontinue"
signature: "isxidcontinue(chr, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.isxidcontinue"
license: "PSF"
updated: "2026-10-01"
---

# isxidcontinue

Return `True` if *chr* is a valid identifier character per the
[Unicode Standard Annex #31](https://www.unicode.org/reports/tr31/),
that is, it has the `XID_Continue` property. Return `False` otherwise.
For example::

   >>> unicodedata.isxidcontinue('S')
   True
   >>> unicodedata.isxidcontinue(' ')
   False

> *Added in 3.15*
