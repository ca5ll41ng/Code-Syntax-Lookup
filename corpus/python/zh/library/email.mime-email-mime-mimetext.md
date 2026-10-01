---
id: "python-zh-function-email-mime-mimetext"
language: "python"
lang: "zh"
category: "function"
name: "MIMEText"
signature: "MIMEText(_text, _subtype='plain', _charset=None, *, policy=compat32)"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMEText"
license: "PSF"
updated: "2026-10-01"
---

# MIMEText

模块：:mod:`email.mime.text`

A subclass of `~email.mime.nonmultipart.MIMENonMultipart`, the
`MIMEText` class is used to create MIME objects of major type
`text`. *_text* is the string for the payload.  *_subtype* is the
minor type and defaults to `plain`.  *_charset* is the character
set of the text and is passed as an argument to the
`~email.mime.nonmultipart.MIMENonMultipart` constructor; it defaults
to `us-ascii` if the string contains only `ascii` code points, and
`utf-8` otherwise.  The *_charset* parameter accepts either a string or a
`~email.charset.Charset` instance.

Unless the *_charset* argument is explicitly set to `None`, the
MIMEText object created will have both a `Content-Type` header
with a `charset` parameter, and a `Content-Transfer-Encoding`
header.  This means that a subsequent `set_payload` call will not result
in an encoded payload, even if a charset is passed in the `set_payload`
command.  You can "reset" this behavior by deleting the
`Content-Transfer-Encoding` header, after which a `set_payload` call
will automatically encode the new payload (and add a new
`Content-Transfer-Encoding` header).

可选的 *policy* 参数默认为 :class:`compat32 <email.policy.Compat32>`。

> *Changed in 3.5*: *_charset* also accepts :class:`~email.charset.Charset` instances.

> *Changed in 3.6*: Added *policy* keyword-only parameter.
