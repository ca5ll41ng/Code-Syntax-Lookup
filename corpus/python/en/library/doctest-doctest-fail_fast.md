---
id: "python-en-function-doctest-fail_fast"
language: "python"
lang: "en"
category: "function"
name: "FAIL_FAST"
directive: "data"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.FAIL_FAST"
license: "PSF"
updated: "2026-10-01"
---

# FAIL_FAST

When specified, exit after the first failing example and don't attempt to run
the remaining examples. Thus, the number of failures reported will be at most
1.  This flag may be useful during debugging, since examples after the first
failure won't even produce debugging output.
