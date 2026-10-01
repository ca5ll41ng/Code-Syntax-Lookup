---
id: "python-en-function-zlib-decompress-unconsumed_tail"
language: "python"
lang: "en"
category: "function"
name: "Decompress.unconsumed_tail"
directive: "attribute"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.Decompress.unconsumed_tail"
license: "PSF"
updated: "2026-10-01"
---

# Decompress.unconsumed_tail

A bytes object that contains any data that was not consumed by the last
`decompress` call because it exceeded the limit for the uncompressed data
buffer.  This data has not yet been seen by the zlib machinery, so you must feed
it (possibly with further data concatenated to it) back to a subsequent
`decompress` method call in order to get correct output.
