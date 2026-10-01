---
id: "python-en-function-codecs-getincrementaldecoder"
language: "python"
lang: "en"
category: "function"
name: "getincrementaldecoder"
signature: "getincrementaldecoder(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.getincrementaldecoder"
license: "PSF"
updated: "2026-10-01"
---

# getincrementaldecoder

Look up the codec for the given encoding and return its incremental decoder
class or factory function.

Raises a `LookupError` in case the encoding cannot be found or the codec
doesn't support an incremental decoder.
