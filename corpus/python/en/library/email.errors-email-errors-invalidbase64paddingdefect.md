---
id: "python-en-function-email-errors-invalidbase64paddingdefect"
language: "python"
lang: "en"
category: "function"
name: "InvalidBase64PaddingDefect"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.InvalidBase64PaddingDefect"
license: "PSF"
updated: "2026-10-01"
---

# InvalidBase64PaddingDefect

When decoding a block of base64 encoded bytes, the padding was not correct.
Enough padding is added to perform the decode, but the resulting decoded
bytes may be invalid.
