---
id: "python-en-function-email-encoders-encode_quopri"
language: "python"
lang: "en"
category: "function"
name: "encode_quopri"
signature: "encode_quopri(msg)"
directive: "function"
module: "email.encoders"
source_url: "https://docs.python.org/3/library/email.encoders.html#email.encoders.encode_quopri"
license: "PSF"
updated: "2026-10-01"
---

# encode_quopri

Encodes the payload into quoted-printable form and sets the
`Content-Transfer-Encoding` header to `quoted-printable` [#]_.
This is a good encoding to use when most of your payload is normal printable
data, but contains a few unprintable characters.
