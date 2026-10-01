---
id: "python-en-function-pprint-compact-false-expand-false-sort_dicts-false"
language: "python"
lang: "en"
category: "function"
name: "compact=False, expand=False, sort_dicts=False, \\"
directive: "function"
module: "pprint"
source_url: "https://docs.python.org/3/library/pprint.html#pprint.compact=False, expand=False, sort_dicts=False, \\"
license: "PSF"
updated: "2026-10-01"
---

# compact=False, expand=False, sort_dicts=False, \

Prints the formatted representation of *object*, followed by a newline.
This function may be used in the interactive interpreter
instead of the `print` function for inspecting values.
Tip: you can reassign `print = pprint.pp` for use within a scope.

:param object:
   The object to be printed.

:param stream:
   A file-like object to which the output will be written
   by calling its `write` method.
   If `None` (the default), `sys.stdout` is used.
:type stream: `file-like object` | None

:param int indent:
   The amount of indentation added for each nesting level.

:param int width:
   The desired maximum number of characters per line in the output.
   If a structure cannot be formatted within the width constraint,
   a best effort will be made.

:param depth:
   The number of nesting levels which may be printed.
   If the data structure being printed is too deep,
   the next contained level is replaced by `...`.
   If `None` (the default), there is no constraint
   on the depth of the objects being formatted.
:type depth: int | None

:param bool compact:
   Control the way long `sequences` are formatted.
   If `False` (the default),
   each item of a sequence will be formatted on a separate line,
   otherwise as many items as will fit within the *width*
   will be formatted on each output line.
   Incompatible with *expand*.

:param bool expand:
   If `True`,
   opening parentheses and brackets will be followed by a newline and the
   following content will be indented by one level, similar to
   pretty-printed JSON. Incompatible with *compact*.

:param bool sort_dicts:
   If `True`, dictionaries will be formatted with
   their keys sorted, otherwise
   they will be displayed in insertion order (the default).

:param bool underscore_numbers:
   If `True`,
   integers will be formatted with the `_` character for a thousands separator,
   otherwise underscores are not displayed (the default).

>>> import pprint
>>> stuff = ['spam', 'eggs', 'lumberjack', 'knights', 'ni']
>>> stuff.insert(0, stuff)
>>> pprint.pp(stuff)
[<Recursion on list with id=...>,
 'spam',
 'eggs',
 'lumberjack',
 'knights',
 'ni']

> *Added in 3.8*
