---
id: "python-en-function-builtins-any"
language: "python"
lang: "en"
category: "function"
name: "any"
signature: "any(iterable, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#any"
license: "PSF"
updated: "2026-10-01"
---

# any

Return `True` if any element of the *iterable* is true.  If the iterable
is empty, return `False`.  Equivalent to::

   def any(iterable):
       for element in iterable:
           if element:
               return True
       return False
