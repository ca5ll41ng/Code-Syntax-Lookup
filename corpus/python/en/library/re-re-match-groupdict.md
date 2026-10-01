---
id: "python-en-function-re-match-groupdict"
language: "python"
lang: "en"
category: "function"
name: "Match.groupdict"
signature: "Match.groupdict(default=None)"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.groupdict"
license: "PSF"
updated: "2026-10-01"
---

# Match.groupdict

Return a dictionary containing all the *named* subgroups of the match, keyed by
the subgroup name.  The *default* argument is used for groups that did not
participate in the match; it defaults to `None`.  For example::

   >>> m = re.search(r"(?P<adjective>\w+) (?P<animal>\w+)", "killer rabbit")
   >>> m.groupdict()
   {'adjective': 'killer', 'animal': 'rabbit'}
