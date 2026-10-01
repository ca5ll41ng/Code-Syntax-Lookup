---
id: "python-en-function-shlex-shlex-whitespace_split"
language: "python"
lang: "en"
category: "function"
name: "shlex.whitespace_split"
directive: "attribute"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.whitespace_split"
license: "PSF"
updated: "2026-10-01"
---

# shlex.whitespace_split

If `True`, tokens will only be split in whitespaces.  This is useful, for
example, for parsing command lines with `~shlex.shlex`, getting
tokens in a similar way to shell arguments.  When used in combination with
`punctuation_chars`, tokens will be split on whitespace in addition to
those characters.

> *Changed in 3.8*: The :attr:`punctuation_chars` attribute was made compatible with the :attr:`whitespace_split` attribute.
