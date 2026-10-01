---
id: "python-en-function-typing-cast"
language: "python"
lang: "en"
category: "function"
name: "cast"
signature: "cast(typ, val)"
directive: "function"
module: "typing"
source_url: "https://docs.python.org/3/library/typing.html#typing.cast"
license: "PSF"
updated: "2026-10-01"
---

# cast

Cast a value to a type.

This returns the value unchanged.  To the type checker this
signals that the return value has the designated type, but at
runtime we intentionally don't check anything (we want this
to be as fast as possible).
