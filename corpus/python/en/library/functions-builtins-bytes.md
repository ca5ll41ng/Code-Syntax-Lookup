---
id: "python-en-function-builtins-bytes"
language: "python"
lang: "en"
category: "function"
name: "bytes"
signature: "bytes(source=b'')"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#bytes"
license: "PSF"
updated: "2026-10-01"
---

# bytes

Return a new "bytes" object which is an immutable sequence of integers in
the range `0 <= x < 256`.  `bytes` is an immutable version of
`bytearray` -- it has the same non-mutating methods and the same
indexing and slicing behavior.

Accordingly, constructor arguments are interpreted as for `bytearray`.

Bytes objects can also be created with literals, see `strings`.

See also `binaryseq`, `typebytes`, and `bytes-methods`.
