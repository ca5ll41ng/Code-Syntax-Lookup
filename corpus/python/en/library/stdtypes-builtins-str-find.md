---
id: "python-en-function-builtins-str-find"
language: "python"
lang: "en"
category: "function"
name: "str.find"
signature: "str.find(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.find"
license: "PSF"
updated: "2026-10-01"
---

# str.find

Return the lowest index in the string where substring *sub* is found within
the slice `s[start:end]`.  Optional arguments *start* and *end* are
interpreted as in slice notation.  Return `-1` if *sub* is not found.
For example::

   >>> 'spam, spam, spam'.find('sp')
   0
   >>> 'spam, spam, spam'.find('sp', 5)
   6

See also `rfind` and `index`.

> **Note**
>
> The `~str.find` method should be used only if you need to know the
> position of *sub*.  To check if *sub* is a substring or not, use the
> `in` operator::
>
>    >>> 'Py' in 'Python'
>    True
>
