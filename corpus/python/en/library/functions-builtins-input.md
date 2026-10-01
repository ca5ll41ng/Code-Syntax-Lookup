---
id: "python-en-function-builtins-input"
language: "python"
lang: "en"
category: "function"
name: "input"
signature: "input()"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#input"
license: "PSF"
updated: "2026-10-01"
---

# input

If the *prompt* argument is present, it is written to standard output without
a trailing newline.  The function then reads a line from input, converts it
to a string (stripping a trailing newline), and returns that.  When EOF is
read, `EOFError` is raised.  Example::

   >>> s = input('--> ')  # doctest: +SKIP
   --> Monty Python's Flying Circus
   >>> s  # doctest: +SKIP
   "Monty Python's Flying Circus"

If the `readline` module was loaded, then `input` will use it
to provide elaborate line editing and history features.

audit-event:: builtins.input prompt input

audit-event:: builtins.input/result result input
