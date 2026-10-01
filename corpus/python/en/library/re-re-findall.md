---
id: "python-en-function-re-findall"
language: "python"
lang: "en"
category: "function"
name: "findall"
signature: "findall(pattern, string, flags=0)"
directive: "function"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.findall"
license: "PSF"
updated: "2026-10-01"
---

# findall

Return all non-overlapping matches of *pattern* in *string*, as a list of
strings or tuples.  The *string* is scanned left-to-right, and matches
are returned in the order found.  Empty matches are included in the result.

The result depends on the number of capturing groups in the pattern.
If there are no groups, return a list of strings matching the whole
pattern.  If there is exactly one group, return a list of strings
matching that group.  If multiple groups are present, return a list
of tuples of strings matching the groups.  Non-capturing groups do not
affect the form of the result.

   >>> re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')
   ['foot', 'fell', 'fastest']
   >>> re.findall(r'(\w+)=(\d+)', 'set width=20 and height=10')
   [('width', '20'), ('height', '10')]

The expression's behaviour can be modified by specifying a *flags* value.
Values can be any of the `flags`_ variables, combined using bitwise OR
(the `|` operator).

> *Changed in 3.7*: Non-empty matches can now start just after a previous empty match.
