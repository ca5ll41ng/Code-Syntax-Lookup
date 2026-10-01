---
id: "python-en-function-zlib-compress-flush"
language: "python"
lang: "en"
category: "function"
name: "Compress.flush"
signature: "Compress.flush(mode=Z_FINISH, /)"
directive: "method"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.Compress.flush"
license: "PSF"
updated: "2026-10-01"
---

# Compress.flush

All pending input is processed, and a bytes object containing the remaining compressed
output is returned.  *mode* can be selected from the constants
`Z_NO_FLUSH`, `Z_PARTIAL_FLUSH`, `Z_SYNC_FLUSH`,
`Z_FULL_FLUSH`, `Z_BLOCK`, or `Z_FINISH`,
defaulting to `Z_FINISH`.  Except `Z_FINISH`, all constants
allow compressing further bytestrings of data, while `Z_FINISH` finishes the
compressed stream and prevents compressing any more data.  After calling `flush`
with *mode* set to `Z_FINISH`, the `compress` method cannot be called again;
the only realistic action is to delete the object.
