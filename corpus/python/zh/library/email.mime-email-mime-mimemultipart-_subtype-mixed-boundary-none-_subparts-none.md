---
id: "python-zh-function-email-mime-mimemultipart-_subtype-mixed-boundary-none-_subparts-none"
language: "python"
lang: "zh"
category: "function"
name: "MIMEMultipart(_subtype='mixed', boundary=None, _subparts=None, \\"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMEMultipart(_subtype='mixed', boundary=None, _subparts=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# MIMEMultipart(_subtype='mixed', boundary=None, _subparts=None, \

模块：:mod:`email.mime.multipart`

A subclass of `~email.mime.base.MIMEBase`, this is an intermediate base
class for MIME messages that are `multipart`.  Optional *_subtype*
defaults to `mixed`, but can be used to specify the subtype of the
message.  A `Content-Type` header of `multipart/_subtype`
will be added to the message object.  A `MIME-Version` header will
also be added.

Optional *boundary* is the multipart boundary string.  When `None` (the
default), the boundary is calculated when needed (for example, when the
message is serialized).

*_subparts* is a sequence of initial subparts for the payload.  It must be
possible to convert this sequence to a list.  You can always attach new subparts
to the message by using the `Message.attach` method.

可选的 *policy* 参数默认为 :class:`compat32 <email.policy.Compat32>`。

Additional parameters for the `Content-Type` header are taken from
the keyword arguments, or passed into the *_params* argument, which is a keyword
dictionary.

> *Changed in 3.6*: Added *policy* keyword-only parameter.
