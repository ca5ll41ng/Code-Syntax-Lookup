---
id: "python-en-function-builtins-all"
language: "python"
lang: "en"
category: "function"
name: "all"
signature: "all(iterable, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#all"
license: "PSF"
updated: "2026-10-01"
---

# all

Return `True` if all elements of the *iterable* are true (or if the iterable
is empty).  Equivalent to::

   def all(iterable):
       for element in iterable:
           if not element:
               return False
       return True
