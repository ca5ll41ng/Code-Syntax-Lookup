---
id: "python-en-function-builtins-bytes-maketrans"
language: "python"
lang: "en"
category: "function"
name: "bytes.maketrans"
signature: "bytes.maketrans(from, to, /)"
directive: "staticmethod"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytes.maketrans"
license: "PSF"
updated: "2026-10-01"
---

# bytes.maketrans

This static method returns a translation table usable for
`bytes.translate` that will map each character in *from* into the
character at the same position in *to*; *from* and *to* must both be
`bytes-like objects` and have the same length.

> *Added in 3.1*
