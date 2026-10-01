---
id: "python-en-function-email-mime-_encoder-email-encoders-encode_base64"
language: "python"
lang: "en"
category: "function"
name: "_encoder=email.encoders.encode_base64, \\"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/3/library/email.mime.html#email.mime._encoder=email.encoders.encode_base64, \\"
license: "PSF"
updated: "2026-10-01"
---

# _encoder=email.encoders.encode_base64, \

Module: `email.mime.application`

A subclass of `~email.mime.nonmultipart.MIMENonMultipart`, the
`MIMEApplication` class is used to represent MIME message objects of
major type `application`.  *_data* contains the bytes for the raw
application data.  Optional *_subtype* specifies the MIME subtype and defaults
to `octet-stream`.

Optional *_encoder* is a callable (i.e. function) which will perform the actual
encoding of the data for transport.  This callable takes one argument, which is
the `MIMEApplication` instance. It should use
`~email.message.Message.get_payload` and
`~email.message.Message.set_payload` to change the payload to encoded
form.  It should also add
any `Content-Transfer-Encoding` or other headers to the message
object as necessary.  The default encoding is base64.  See the
`email.encoders` module for a list of the built-in encoders.

Optional *policy* argument defaults to `compat32`.

*_params* are passed straight through to the base class constructor.

> *Changed in 3.6*: Added *policy* keyword-only parameter.
