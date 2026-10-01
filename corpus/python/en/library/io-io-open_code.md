---
id: "python-en-function-io-open_code"
language: "python"
lang: "en"
category: "function"
name: "open_code"
signature: "open_code(path)"
directive: "function"
module: "io"
source_url: "https://docs.python.org/3/library/io.html#io.open_code"
license: "PSF"
updated: "2026-10-01"
---

# open_code

Opens the provided file with mode `'rb'`. This function should be used
when the intent is to treat the contents as executable code.

*path* should be a `str` and an absolute path.

The behavior of this function may be overridden by an earlier call to the
:c`PyFile_SetOpenCodeHook`. However, assuming that *path* is a
`str` and an absolute path, `open_code(path)` should always behave
the same as `open(path, 'rb')`. Overriding the behavior is intended for
additional validation or preprocessing of the file.

> *Added in 3.8*
