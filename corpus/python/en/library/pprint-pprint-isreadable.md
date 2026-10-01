---
id: "python-en-function-pprint-isreadable"
language: "python"
lang: "en"
category: "function"
name: "isreadable"
signature: "isreadable(object)"
directive: "function"
module: "pprint"
source_url: "https://docs.python.org/3/library/pprint.html#pprint.isreadable"
license: "PSF"
updated: "2026-10-01"
---

# isreadable

Determine if the formatted representation of *object* is "readable", or can be
used to reconstruct the value using `eval`.  This always returns `False`
for recursive objects.

   >>> pprint.isreadable(stuff)
   False
