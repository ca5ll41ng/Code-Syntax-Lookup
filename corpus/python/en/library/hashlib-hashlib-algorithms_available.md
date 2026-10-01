---
id: "python-en-function-hashlib-algorithms_available"
language: "python"
lang: "en"
category: "function"
name: "algorithms_available"
directive: "data"
module: "hashlib"
source_url: "https://docs.python.org/3/library/hashlib.html#hashlib.algorithms_available"
license: "PSF"
updated: "2026-10-01"
---

# algorithms_available

A set containing the names of the hash algorithms that are available in the
running Python interpreter.  These names will be recognized when passed to
`new`.  `algorithms_guaranteed` will always be a subset.  The
same algorithm may appear multiple times in this set under different names
(thanks to OpenSSL).

> *Added in 3.2*
