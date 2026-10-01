---
id: "python-en-function-test-detect_api_mismatch"
language: "python"
lang: "en"
category: "function"
name: "detect_api_mismatch"
signature: "detect_api_mismatch(ref_api, other_api, *, ignore=())"
directive: "function"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.detect_api_mismatch"
license: "PSF"
updated: "2026-10-01"
---

# detect_api_mismatch

Returns the set of attributes, functions or methods of *ref_api* not
found on *other_api*, except for a defined list of items to be
ignored in this check specified in *ignore*.

By default this skips private attributes beginning with '_' but
includes all magic methods, i.e. those starting and ending in '__'.

> *Added in 3.5*
