---
id: "python-en-function-builtins-str-endswith"
language: "python"
lang: "en"
category: "function"
name: "str.endswith"
signature: "str.endswith(suffix[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.endswith"
license: "PSF"
updated: "2026-10-01"
---

# str.endswith

Return `True` if the string ends with the specified *suffix*, otherwise return
`False`.  *suffix* can also be a tuple of suffixes to look for.  With optional
*start*, test beginning at that position.  With optional *end*, stop comparing
at that position. Using *start* and *end* is equivalent to
`str[start:end].endswith(suffix)`. For example::

   >>> 'Python'.endswith('on')
   True
   >>> 'a tuple of suffixes'.endswith(('at', 'in'))
   False
   >>> 'a tuple of suffixes'.endswith(('at', 'es'))
   True
   >>> 'Python is amazing'.endswith('is', 0, 9)
   True

See also `startswith` and `removesuffix`.
