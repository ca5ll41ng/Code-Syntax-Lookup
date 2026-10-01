---
id: "python-en-function-email-encoders-encode_base64"
language: "python"
lang: "en"
category: "function"
name: "encode_base64"
signature: "encode_base64(msg)"
directive: "function"
module: "email.encoders"
source_url: "https://docs.python.org/3/library/email.encoders.html#email.encoders.encode_base64"
license: "PSF"
updated: "2026-10-01"
---

# encode_base64

Encodes the payload into base64 form and sets the
`Content-Transfer-Encoding` header to `base64`.  This is a good
encoding to use when most of your payload is unprintable data since it is a more
compact form than quoted-printable.  The drawback of base64 encoding is that it
renders the text non-human readable.
