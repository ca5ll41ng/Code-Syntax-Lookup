---
id: "python-en-function-email-errors-invalidbase64charactersdefect"
language: "python"
lang: "en"
category: "function"
name: "InvalidBase64CharactersDefect"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.InvalidBase64CharactersDefect"
license: "PSF"
updated: "2026-10-01"
---

# InvalidBase64CharactersDefect

When decoding a block of base64 encoded bytes, characters outside the base64
alphabet were encountered.  The characters are ignored, but the resulting
decoded bytes may be invalid.
