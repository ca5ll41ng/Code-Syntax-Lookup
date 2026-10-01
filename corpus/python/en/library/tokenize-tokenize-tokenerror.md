---
id: "python-en-function-tokenize-tokenerror"
language: "python"
lang: "en"
category: "function"
name: "TokenError"
directive: "exception"
module: "tokenize"
source_url: "https://docs.python.org/3/library/tokenize.html#tokenize.TokenError"
license: "PSF"
updated: "2026-10-01"
---

# TokenError

Raised when either a docstring or expression that may be split over several
lines is not completed anywhere in the file, for example::

   """Beginning of
   docstring

or::

   [1,
    2,
    3
