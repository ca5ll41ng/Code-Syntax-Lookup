---
id: "python-zh-function-email-mime-mimebase"
language: "python"
lang: "zh"
category: "function"
name: "MIMEBase"
signature: "MIMEBase(_maintype, _subtype, *, policy=compat32, **_params)"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMEBase"
license: "PSF"
updated: "2026-10-01"
---

# MIMEBase

模块：:mod:`email.mime.base`

This is the base class for all the MIME-specific subclasses of
`~email.message.Message`.  Ordinarily you won't create instances
specifically of `MIMEBase`, although you could.  `MIMEBase`
is provided primarily as a convenient base class for more specific
MIME-aware subclasses.

*_maintype* is the `Content-Type` major type (e.g. `text`
or `image`), and *_subtype* is the `Content-Type` minor
type  (e.g. `plain` or `gif`).  *_params* is a parameter
key/value dictionary and is passed directly to `Message.add_header`.

If *policy* is specified, (defaults to the
`compat32` policy) it will be passed to
`~email.message.Message`.

The `MIMEBase` class always adds a `Content-Type` header
(based on *_maintype*, *_subtype*, and *_params*), and a
`MIME-Version` header (always set to `1.0`).

> *Changed in 3.6*: Added *policy* keyword-only parameter.
