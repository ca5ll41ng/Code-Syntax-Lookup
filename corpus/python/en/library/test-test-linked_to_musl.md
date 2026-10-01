---
id: "python-en-function-test-linked_to_musl"
language: "python"
lang: "en"
category: "function"
name: "linked_to_musl"
signature: "linked_to_musl()"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.linked_to_musl"
license: "PSF"
updated: "2026-10-01"
---

# linked_to_musl

Return `False` if there is no evidence the interpreter was compiled with
`musl`, otherwise return a version triple, either `(0, 0, 0)` if the
version is unknown, or the actual version if it is known.  Intended for use
in `skip` decorators.  `emscripten` and `wasi` are assumed to be
compiled with `musl`; otherwise `platform.libc_ver` is checked.
