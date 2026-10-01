---
id: "python-en-function-test-testfn_nonascii"
language: "python"
lang: "en"
category: "function"
name: "TESTFN_NONASCII"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.TESTFN_NONASCII"
license: "PSF"
updated: "2026-10-01"
---

# TESTFN_NONASCII

Set to a filename containing the `FS_NONASCII` character, if it exists.
This guarantees that if the filename exists, it can be encoded and decoded
with the default filesystem encoding. This allows tests that require a
non-ASCII filename to be easily skipped on platforms where they can't work.
