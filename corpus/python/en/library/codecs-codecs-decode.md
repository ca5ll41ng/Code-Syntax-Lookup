---
id: "python-en-function-codecs-decode"
language: "python"
lang: "en"
category: "function"
name: "decode"
signature: "decode(obj, encoding='utf-8', errors='strict')"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/3/library/codecs.html#codecs.decode"
license: "PSF"
updated: "2026-10-01"
---

# decode

Decodes *obj* using the codec registered for *encoding*.

*Errors* may be given to set the desired error handling scheme. The
default error handler is `'strict'` meaning that decoding errors raise
`ValueError` (or a more codec specific subclass, such as
`UnicodeDecodeError`). Refer to `codec-base-classes` for more
information on codec error handling.
