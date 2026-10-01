---
id: "python-en-function-re-split"
language: "python"
lang: "en"
category: "function"
name: "split"
signature: "split(pattern, string, maxsplit=0, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.split"
license: "PSF"
updated: "2026-10-01"
---

# split

Split *string* by the occurrences of *pattern*.  If capturing parentheses are
used in *pattern*, then the text of all groups in the pattern are also returned
as part of the resulting list. If *maxsplit* is nonzero, at most *maxsplit*
splits occur, and the remainder of the string is returned as the final element
of the list. ::

   >>> re.split(r'\W+', 'Words, words, words.')
   ['Words', 'words', 'words', '']
   >>> re.split(r'(\W+)', 'Words, words, words.')
   ['Words', ', ', 'words', ', ', 'words', '.', '']
   >>> re.split(r'\W+', 'Words, words, words.', maxsplit=1)
   ['Words', 'words, words.']
   >>> re.split('[a-f]+', '0a3B9', flags=re.IGNORECASE)
   ['0', '3', '9']

If there are capturing groups in the separator and it matches at the start of
the string, the result will start with an empty string.  The same holds for
the end of the string::

   >>> re.split(r'(\W+)', '...words, words...')
   ['', '...', 'words', ', ', 'words', '...', '']

That way, separator components are always found at the same relative
indices within the result list.

Adjacent empty matches are not possible, but an empty match can occur
immediately after a non-empty match.

code:: pycon

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

> *Changed in 3.1*: Added the optional flags argument.

> *Changed in 3.7*: Added support of splitting on a pattern that could match an empty string.

> *Deprecated since 3.13*: Passing *maxsplit* and *flags* as positional arguments is deprecated. In future Python versions they will be :ref:`keyword-only parameters <keyword-only_parameter>`.
