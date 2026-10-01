---
id: "python-en-function-email-errors-headerparseerror"
language: "python"
lang: "en"
category: "function"
name: "HeaderParseError"
signature: "HeaderParseError()"
directive: "exception"
module: "email.errors"
source_url: "https://docs.python.org/3/library/email.errors.html#email.errors.HeaderParseError"
license: "PSF"
updated: "2026-10-01"
---

# HeaderParseError

Raised under some error conditions when parsing the RFC 5322 headers of a
message, this class is derived from `MessageParseError`.  The
`~email.message.EmailMessage.set_boundary` method will raise this
error if the content type is unknown when the method is called.
`~email.header.Header` may raise this error for certain base64
decoding errors, and when an attempt is made to create a header that appears
to contain an embedded header (that is, there is what is supposed to be a
continuation line that has no leading whitespace and looks like a header).
