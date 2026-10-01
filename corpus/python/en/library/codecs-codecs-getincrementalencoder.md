---
id: "python-en-function-codecs-getincrementalencoder"
language: "python"
lang: "en"
category: "function"
name: "getincrementalencoder"
signature: "getincrementalencoder(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.getincrementalencoder"
license: "PSF"
updated: "2026-10-01"
---

# getincrementalencoder

Look up the codec for the given encoding and return its incremental encoder
class or factory function.

Raises a `LookupError` in case the encoding cannot be found or the codec
doesn't support an incremental encoder.
