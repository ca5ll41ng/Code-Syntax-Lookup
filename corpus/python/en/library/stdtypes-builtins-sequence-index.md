---
id: "python-en-function-builtins-sequence-index"
language: "python"
lang: "en"
category: "function"
name: "sequence.index"
signature: "sequence.index(value[, start[, stop]])"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#sequence.index"
license: "PSF"
updated: "2026-10-01"
---

# sequence.index

Return the index of the first occurrence of *value* in *sequence*.

Raises `ValueError` if *value* is not found in *sequence*.

The *start* or *stop* arguments allow for efficient searching
of subsections of the sequence, beginning at *start* and ending at *stop*.
This is roughly equivalent to `start + sequence[start:stop].index(value)`,
only without copying any data.

> **Caution**
>
> Not all sequence types support passing the *start* and *stop* arguments.
>
