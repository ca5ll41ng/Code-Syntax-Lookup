---
id: "python-en-function-shlex-shlex-punctuation_chars"
language: "python"
lang: "en"
category: "function"
name: "shlex.punctuation_chars"
directive: "attribute"
module: "shlex"
source_url: "https://docs.python.org/3/library/shlex.html#shlex.punctuation_chars"
license: "PSF"
updated: "2026-10-01"
---

# shlex.punctuation_chars

A read-only property. Characters that will be considered punctuation. Runs of
punctuation characters will be returned as a single token. However, note that no
semantic validity checking will be performed: for example, '>>>' could be
returned as a token, even though it may not be recognised as such by shells.

> *Added in 3.6*
