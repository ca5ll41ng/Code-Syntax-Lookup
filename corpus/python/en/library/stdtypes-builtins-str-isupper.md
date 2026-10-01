---
id: "python-en-function-builtins-str-isupper"
language: "python"
lang: "en"
category: "function"
name: "str.isupper"
signature: "str.isupper()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.isupper"
license: "PSF"
updated: "2026-10-01"
---

# str.isupper

Return `True` if all cased characters [4]_ in the string are uppercase and
there is at least one cased character, `False` otherwise.

   >>> 'BANANA'.isupper()
   True
   >>> 'banana'.isupper()
   False
   >>> 'baNana'.isupper()
   False
   >>> ' '.isupper()
   False
