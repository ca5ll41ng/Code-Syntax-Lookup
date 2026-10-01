---
id: "python-en-function-email-errors-multipartconversionerror"
language: "python"
lang: "en"
category: "function"
name: "MultipartConversionError"
signature: "MultipartConversionError()"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.MultipartConversionError"
license: "PSF"
updated: "2026-10-01"
---

# MultipartConversionError

Raised if the `~email.message.Message.attach` method is called
on an instance of a class derived from
`~email.mime.nonmultipart.MIMENonMultipart` (e.g.
`~email.mime.image.MIMEImage`).
`MultipartConversionError` multiply
inherits from `MessageError` and the built-in `TypeError`.
