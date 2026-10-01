---
id: "python-en-function-unicodedata-lookup"
language: "python"
lang: "en"
category: "function"
name: "lookup"
signature: "lookup(name, /)"
directive: "function"
module: "unicodedata"
source_url: "https://docs.python.org/3/library/unicodedata.html#unicodedata.lookup"
license: "PSF"
updated: "2026-10-01"
---

# lookup

Look up character by name.  If a character with the given name is found, return
the corresponding character.  If not found, `KeyError` is raised.
For example::

   >>> unicodedata.lookup('LEFT CURLY BRACKET')
   '{'

The characters returned by this function are the same as those produced by
`\N` escape sequence in string literals. For example::

   >>> unicodedata.lookup('MIDDLE DOT') == '\N{MIDDLE DOT}'
   True

> *Changed in 3.3*: Support for name aliases [#]_ and named sequences [#]_ has been added.
