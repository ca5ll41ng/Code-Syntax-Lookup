---
id: "python-en-function-codecs-readbuffer_encode"
language: "python"
lang: "en"
category: "function"
name: "readbuffer_encode"
signature: "readbuffer_encode(buffer, errors=None, /)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.readbuffer_encode"
license: "PSF"
updated: "2026-10-01"
---

# readbuffer_encode

Return a `tuple` containing the raw bytes of *buffer*, a
`buffer-compatible object` or `str`
(encoded to UTF-8 before processing), and their length in bytes.

The *errors* argument is ignored.

```pycon

>>> codecs.readbuffer_encode(b"Zito")
(b'Zito', 4)
```
