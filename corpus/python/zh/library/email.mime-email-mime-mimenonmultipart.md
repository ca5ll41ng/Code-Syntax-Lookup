---
id: "python-zh-function-email-mime-mimenonmultipart"
language: "python"
lang: "zh"
category: "function"
name: "MIMENonMultipart"
signature: "MIMENonMultipart()"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMENonMultipart"
license: "PSF"
updated: "2026-10-01"
---

# MIMENonMultipart

模块：:mod:`email.mime.nonmultipart`

A subclass of `~email.mime.base.MIMEBase`, this is an intermediate base
class for MIME messages that are not `multipart`.  The primary
purpose of this class is to prevent the use of the
`~email.message.Message.attach` method, which only makes sense for
`multipart` messages.  If `~email.message.Message.attach`
is called, a `~email.errors.MultipartConversionError` exception is raised.
