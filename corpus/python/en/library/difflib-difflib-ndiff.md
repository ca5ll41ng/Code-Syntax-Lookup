---
id: "python-en-function-difflib-ndiff"
language: "python"
lang: "en"
category: "function"
name: "ndiff"
signature: "ndiff(a, b, linejunk=None, charjunk=IS_CHARACTER_JUNK, *, autojunk=True)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/3/library/difflib.html#difflib.ndiff"
license: "PSF"
updated: "2026-10-01"
---

# ndiff

Compare *a* and *b* (lists of strings); return a `Differ`\ -style
delta (a `generator` generating the delta lines).

Optional keyword parameters *linejunk* and *charjunk* are filtering functions
(or `None`):

*linejunk*: A function that accepts a single string argument, and returns
true if the string is junk, or false if not. The default is `None`. There
is also a module-level function `IS_LINE_JUNK`, which filters out lines
without visible characters, except for at most one hash character (`'#'`)
-- however the underlying `SequenceMatcher` class does a dynamic
analysis of which lines are so frequent as to constitute noise, and this
usually works better than using this function.

*charjunk*: A function that accepts a character (a string of length 1), and
returns if the character is junk, or false if not. The default is module-level
function `IS_CHARACTER_JUNK`, which filters out whitespace characters (a
blank or tab; it's a bad idea to include newline in this!).

Setting the optional *autojunk* argument to `False` will turn
`automatic junk heuristic` off.

Example:

**>>> diff = ndiff('one\ntwo\nthree\n'.splitlines(keepends=True),    ...              'ore\ntree\nemu\n'.splitlines(keepends=True))    >>> print(''.join(diff), end="")    - one**

**+ ore**

   - two
   - three
   ?  -
   + tree
   + emu

> *Changed in 3.16*: Added keyword-only *autojunk* parameter.
