---
id: "python-en-function-textwrap-dedent"
language: "python"
lang: "en"
category: "function"
name: "dedent"
signature: "dedent(text)"
directive: "function"
module: "textwrap"
source_url: "https://docs.python.org/3/library/textwrap.html#textwrap.dedent"
license: "PSF"
updated: "2026-10-01"
---

# dedent

Remove any common leading whitespace from every line in *text*.

This can be used to make triple-quoted strings line up with the left edge of the
display, while still presenting them in the source code in indented form.

Note that tabs and spaces are both treated as whitespace, but they are not
equal: the lines `"  hello"` and `"\thello"` are considered to have no
common leading whitespace.

Lines containing only whitespace are ignored in the input and normalized to a
single newline character in the output.

For example::

   def test():
       # end first line with \ to avoid the empty line!
       s = '''\
       hello
         world
       '''
       print(repr(s))          # prints '    hello\n      world\n    '
       print(repr(dedent(s)))  # prints 'hello\n  world\n'

> *Changed in 3.14*: The :func:`!dedent` function now correctly normalizes blank lines containing only whitespace characters. Previously, the implementation only normalized blank lines containing tabs and spaces.
