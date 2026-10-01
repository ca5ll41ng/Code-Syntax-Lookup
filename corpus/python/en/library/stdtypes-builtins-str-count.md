---
id: "python-en-function-builtins-str-count"
language: "python"
lang: "en"
category: "function"
name: "str.count"
signature: "str.count(sub[, start[, end]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.count"
license: "PSF"
updated: "2026-10-01"
---

# str.count

Return the number of non-overlapping occurrences of substring *sub* in the
range [*start*, *end*].  Optional arguments *start* and *end* are
interpreted as in slice notation.

If *sub* is empty, returns the number of empty strings between characters
which is the length of the string plus one. For example::

   >>> 'spam, spam, spam'.count('spam')
   3
   >>> 'spam, spam, spam'.count('spam', 5)
   2
   >>> 'spam, spam, spam'.count('spam', 5, 10)
   1
   >>> 'spam, spam, spam'.count('eggs')
   0
   >>> 'spam, spam, spam'.count('')
   17
