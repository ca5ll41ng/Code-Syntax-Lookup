---
id: "python-en-function-reprlib-repr-maxstring"
language: "python"
lang: "en"
category: "function"
name: "Repr.maxstring"
directive: "attribute"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.Repr.maxstring"
license: "PSF"
updated: "2026-10-01"
---

# Repr.maxstring

Limit on the number of characters in the representation of the string.  Note
that the "normal" representation of the string is used as the character source:
if escape sequences are needed in the representation, these may be mangled when
the representation is shortened.  The default is `30`.
