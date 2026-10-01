---
id: "python-en-function-pprint-prettyprinter-isreadable"
language: "python"
lang: "en"
category: "function"
name: "PrettyPrinter.isreadable"
signature: "PrettyPrinter.isreadable(object)"
directive: "method"
module: "pprint"
source_url: "https://docs.python.org/3/library/pprint.html#pprint.PrettyPrinter.isreadable"
license: "PSF"
updated: "2026-10-01"
---

# PrettyPrinter.isreadable

Determine if the formatted representation of the object is "readable," or can be
used to reconstruct the value using `eval`.  Note that this returns
`False` for recursive objects.  If the *depth* parameter of the
`PrettyPrinter` is set and the object is deeper than allowed, this
returns `False`.
