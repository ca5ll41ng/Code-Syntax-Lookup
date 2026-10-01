---
id: "python-en-function-builtins-str-title"
language: "python"
lang: "en"
category: "function"
name: "str.title"
signature: "str.title()"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#str.title"
license: "PSF"
updated: "2026-10-01"
---

# str.title

Return a titlecased version of the string where words start with an uppercase
character and the remaining characters are lowercase.

For example::

   >>> 'Hello world'.title()
   'Hello World'

The algorithm uses a simple language-independent definition of a word as
groups of consecutive letters.  The definition works in many contexts but
it means that apostrophes in contractions and possessives form word
boundaries, which may not be the desired result::

     >>> "they're bill's friends from the UK".title()
     "They'Re Bill'S Friends From The Uk"

The `string.capwords` function does not have this problem, as it
splits words on spaces only.

Alternatively, a workaround for apostrophes can be constructed using regular
expressions::

     >>> import re
     >>> def titlecase(s):
     ...     return re.sub(r"[A-Za-z]+('[A-Za-z]+)?",
     ...                   lambda mo: mo.group(0).capitalize(),
     ...                   s)
     ...
     >>> titlecase("they're bill's friends.")
     "They're Bill's Friends."

See also `istitle`.
