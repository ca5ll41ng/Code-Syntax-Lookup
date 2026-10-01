---
id: "python-en-function-codecs-namereplace_errors"
language: "python"
lang: "en"
category: "function"
name: "namereplace_errors"
signature: "namereplace_errors(exception)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.namereplace_errors"
license: "PSF"
updated: "2026-10-01"
---

# namereplace_errors

Implements the `'namereplace'` error handling (for encoding within
`text encoding` only).

The unencodable character is replaced by a `\N{...}` escape sequence. The
set of characters that appear in the braces is the Name property from
Unicode Character Database. For example, the German lowercase letter `'ß'`
will be converted to byte sequence `\N{LATIN SMALL LETTER SHARP S}` .

> *Added in 3.5*
