---
id: "python-en-function-textwrap-indent"
language: "python"
lang: "en"
category: "function"
name: "indent"
signature: "indent(text, prefix, predicate=None)"
directive: "function"
module: "textwrap"
source_url: "https://docs.python.org/3/library/textwrap.html#textwrap.indent"
license: "PSF"
updated: "2026-10-01"
---

# indent

Add *prefix* to the beginning of selected lines in *text*.

Lines are separated by calling `text.splitlines(True)`.

By default, *prefix* is added to all lines that do not consist
solely of whitespace (including any line endings).

For example::

   >>> s = 'hello\n\n \nworld'
   >>> indent(s, '  ')
   '  hello\n\n \n  world'

The optional *predicate* argument can be used to control which lines
are indented. For example, it is easy to add *prefix* to even empty
and whitespace-only lines::

   >>> print(indent(s, '+ ', lambda line: True))
   + hello
   +
   +
   + world

> *Added in 3.3*
