---
id: "python-zh-function-email-mime-mimemessage"
language: "python"
lang: "zh"
category: "function"
name: "MIMEMessage"
signature: "MIMEMessage(_msg, _subtype='rfc822', *, policy=compat32)"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMEMessage"
license: "PSF"
updated: "2026-10-01"
---

# MIMEMessage

模块：:mod:`email.mime.message`

A subclass of `~email.mime.nonmultipart.MIMENonMultipart`, the
`MIMEMessage` class is used to create MIME objects of main type
`message`. *_msg* is used as the payload, and must be an instance
of class `~email.message.Message` (or a subclass thereof), otherwise
a `TypeError` is raised.

Optional *_subtype* sets the subtype of the message; it defaults to
`rfc822`.

可选的 *policy* 参数默认为 :class:`compat32 <email.policy.Compat32>`。

> *Changed in 3.6*: Added *policy* keyword-only parameter.
