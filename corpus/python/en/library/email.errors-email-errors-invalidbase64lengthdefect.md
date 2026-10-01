---
id: "python-en-function-email-errors-invalidbase64lengthdefect"
language: "python"
lang: "en"
category: "function"
name: "InvalidBase64LengthDefect"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.InvalidBase64LengthDefect"
license: "PSF"
updated: "2026-10-01"
---

# InvalidBase64LengthDefect

When decoding a block of base64 encoded bytes, the number of non-padding
base64 characters was invalid (1 more than a multiple of 4).  The encoded
block was kept as-is.
