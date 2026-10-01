---
id: "python-en-function-email-mime-mimeimage-_imagedata-_subtype-none"
language: "python"
lang: "en"
category: "function"
name: "MIMEImage(_imagedata, _subtype=None, \\"
directive: "class"
module: "email.mime"
source_url: "https://docs.python.org/3/library/email.mime.html#email.mime.MIMEImage(_imagedata, _subtype=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# MIMEImage(_imagedata, _subtype=None, \

Module: `email.mime.image`

A subclass of `~email.mime.nonmultipart.MIMENonMultipart`, the
`MIMEImage` class is used to create MIME message objects of major type
`image`. *_imagedata* contains the bytes for the raw image data.  If
this data type can be detected (jpeg, png, gif, tiff, rgb, pbm, pgm, ppm,
rast, xbm, bmp, webp, and exr attempted), then the subtype will be
automatically included in the `Content-Type` header. Otherwise
you can explicitly specify the image subtype via the *_subtype* argument.
If the minor type could not be guessed and *_subtype* was not given, then
`TypeError` is raised.

Optional *_encoder* is a callable (i.e. function) which will perform the actual
encoding of the image data for transport.  This callable takes one argument,
which is the `MIMEImage` instance. It should use
`~email.message.Message.get_payload` and
`~email.message.Message.set_payload` to change the payload to encoded
form.  It should also add
any `Content-Transfer-Encoding` or other headers to the message
object as necessary.  The default encoding is base64.  See the
`email.encoders` module for a list of the built-in encoders.

Optional *policy* argument defaults to `compat32`.

*_params* are passed straight through to the `~email.mime.base.MIMEBase`
constructor.

> *Changed in 3.6*: Added *policy* keyword-only parameter.
