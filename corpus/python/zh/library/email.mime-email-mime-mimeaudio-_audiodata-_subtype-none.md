---
id: "python-zh-function-email-mime-mimeaudio-_audiodata-_subtype-none"
language: "python"
lang: "zh"
category: "function"
name: "MIMEAudio(_audiodata, _subtype=None, \\"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/zh-cn/3/library/email.mime.html#email.mime.MIMEAudio(_audiodata, _subtype=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# MIMEAudio(_audiodata, _subtype=None, \

模块：:mod:`email.mime.audio`

A subclass of `~email.mime.nonmultipart.MIMENonMultipart`, the
`MIMEAudio` class is used to create MIME message objects of major type
`audio`. *_audiodata* contains the bytes for the raw audio data.  If
this data can be decoded as au, wav, aiff, or aifc, then the
subtype will be automatically included in the `Content-Type` header.
Otherwise you can explicitly specify the audio subtype via the *_subtype*
argument.  If the minor type could not be guessed and *_subtype* was not given,
then `TypeError` is raised.

Optional *_encoder* is a callable (i.e. function) which will perform the actual
encoding of the audio data for transport.  This callable takes one argument,
which is the `MIMEAudio` instance. It should use
`~email.message.Message.get_payload` and
`~email.message.Message.set_payload` to change the payload to encoded
form.  It should also add
any `Content-Transfer-Encoding` or other headers to the message
object as necessary.  The default encoding is base64.  See the
`email.encoders` module for a list of the built-in encoders.

可选的 *policy* 参数默认为 :class:`compat32 <email.policy.Compat32>`。

*_params* 会被直接传递给基类的构造器。

> *Changed in 3.6*: Added *policy* keyword-only parameter.
