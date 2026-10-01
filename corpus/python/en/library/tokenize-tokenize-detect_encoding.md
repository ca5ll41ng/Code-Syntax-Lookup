---
id: "python-en-function-tokenize-detect_encoding"
language: "python"
lang: "en"
category: "function"
name: "detect_encoding"
signature: "detect_encoding(readline)"
directive: "function"
module: "tokenize"
source_url: "https://docs.python.org/3/library/tokenize.html#tokenize.detect_encoding"
license: "PSF"
updated: "2026-10-01"
---

# detect_encoding

The `detect_encoding` function is used to detect the encoding that
should be used to decode a Python source file. It requires one argument,
readline, in the same way as the `.tokenize` generator.

It will call readline a maximum of twice, and return the encoding used
(as a string) and a list of any lines (not decoded from bytes) it has read
in.

It detects the encoding from the presence of a UTF-8 BOM or an encoding
cookie as specified in PEP 263. If both a BOM and a cookie are present,
but disagree, a `SyntaxError` will be raised. Note that if the BOM is found,
`'utf-8-sig'` will be returned as an encoding.

If no encoding is specified, then the default of `'utf-8'` will be
returned.

Use `.open` to open Python source files: it uses
`detect_encoding` to detect the file encoding.
