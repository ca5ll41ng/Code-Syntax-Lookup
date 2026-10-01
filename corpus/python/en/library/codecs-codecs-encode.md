---
id: "python-en-function-codecs-encode"
language: "python"
lang: "en"
category: "function"
name: "encode"
signature: "encode(obj, encoding='utf-8', errors='strict')"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.encode"
license: "PSF"
updated: "2026-10-01"
---

# encode

Encodes *obj* using the codec registered for *encoding*.

*Errors* may be given to set the desired error handling scheme. The
default error handler is `'strict'` meaning that encoding errors raise
`ValueError` (or a more codec specific subclass, such as
`UnicodeEncodeError`). Refer to `codec-base-classes` for more
information on codec error handling.
