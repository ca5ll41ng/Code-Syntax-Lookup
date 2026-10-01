---
id: "python-en-function-doctest-register_optionflag"
language: "python"
lang: "en"
category: "function"
name: "register_optionflag"
signature: "register_optionflag(name)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.register_optionflag"
license: "PSF"
updated: "2026-10-01"
---

# register_optionflag

Create a new option flag with a given name, and return the new flag's integer
value.  `register_optionflag` can be used when subclassing
`OutputChecker` or `DocTestRunner` to create new options that are
supported by your subclasses.  `register_optionflag` should always be
called using the following idiom::

   MY_FLAG = register_optionflag('MY_FLAG')
