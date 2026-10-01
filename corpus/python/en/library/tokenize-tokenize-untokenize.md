---
id: "python-en-function-tokenize-untokenize"
language: "python"
lang: "en"
category: "function"
name: "untokenize"
signature: "untokenize(iterable)"
directive: "function"
module: "tokenize"
source_url: "https://docs.python.org/3/library/tokenize.html#tokenize.untokenize"
license: "PSF"
updated: "2026-10-01"
---

# untokenize

Converts tokens back into Python source code.  The *iterable* must return
sequences with at least two elements, the token type and the token string.
Any additional sequence elements are ignored.

The result is guaranteed to tokenize back to match the input so that the
conversion is lossless and round-trips are assured.  The guarantee applies
only to the token type and token string as the spacing between tokens
(column positions) may change.

It returns bytes, encoded using the `~token.ENCODING` token, which
is the first token sequence output by `.tokenize`. If there is no
encoding token in the input, it returns a str instead.
