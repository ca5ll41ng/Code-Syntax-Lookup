---
id: "python-en-function-re-match-group"
language: "python"
lang: "en"
category: "function"
name: "Match.group"
signature: "Match.group([group1, ...])"
directive: "method"
module: "re"
source_url: "https://docs.python.org/3/library/re.html#re.Match.group"
license: "PSF"
updated: "2026-10-01"
---

# Match.group

Returns one or more subgroups of the match.  If there is a single argument, the
result is a single string; if there are multiple arguments, the result is a
tuple with one item per argument. Without arguments, *group1* defaults to zero
(the whole match is returned). If a *groupN* argument is zero, the corresponding
return value is the entire matching string; if it is a positive integer, it is
the string matching the corresponding parenthesized group.  If a group number is
negative or larger than the number of groups defined in the pattern, an
`IndexError` exception is raised. If a group is contained in a
part of the pattern that did not match, the corresponding result is `None`.
If a group is contained in a part of the pattern that matched multiple times,
the last match is returned. ::

   >>> m = re.search(r"\A(\w+) (\w+)", "Norwegian Blue, pining for the fjords")
   >>> m.group(0)       # The entire match
   'Norwegian Blue'
   >>> m.group(1)       # The first parenthesized subgroup.
   'Norwegian'
   >>> m.group(2)       # The second parenthesized subgroup.
   'Blue'
   >>> m.group(1, 2)    # Multiple arguments give us a tuple.
   ('Norwegian', 'Blue')

If the regular expression uses the `(?P<name>...)` syntax, the *groupN*
arguments may also be strings identifying groups by their group name.  If a
string argument is not used as a group name in the pattern, an `IndexError`
exception is raised.

A moderately complicated example::

   >>> m = re.search(r"(?P<adjective>\w+) (?P<animal>\w+)", "killer rabbit")
   >>> m.group('adjective')
   'killer'
   >>> m.group('animal')
   'rabbit'

Named groups can also be referred to by their index::

   >>> m.group(1)
   'killer'
   >>> m.group(2)
   'rabbit'

If a group matches multiple times, only the last match is accessible::

   >>> m = re.search(r"(..)+", "a1b2c3")  # Matches 3 times.
   >>> m.group(1)                         # Returns only the last match.
   'c3'
