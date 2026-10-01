---
id: "python-en-function-re-match-groups"
language: "python"
lang: "en"
category: "function"
name: "Match.groups"
signature: "Match.groups(default=None)"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.groups"
license: "PSF"
updated: "2026-10-01"
---

# Match.groups

Return a tuple containing all the subgroups of the match, from 1 up to however
many groups are in the pattern.  The *default* argument is used for groups that
did not participate in the match; it defaults to `None`.

For example::

   >>> m = re.search(r"(\d+)\.(\d+)", "24.1632")
   >>> m.groups()
   ('24', '1632')

If we make the decimal place and everything after it optional, not all groups
might participate in the match.  These groups will default to `None` unless
the *default* argument is given::

   >>> m = re.search(r"(\d+)\.?(\d+)?", "24")
   >>> m.groups()      # Second group defaults to None.
   ('24', None)
   >>> m.groups('0')   # Now, the second group defaults to '0'.
   ('24', '0')
