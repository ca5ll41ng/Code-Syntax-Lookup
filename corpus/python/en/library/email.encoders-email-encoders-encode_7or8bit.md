---
id: "python-en-function-email-encoders-encode_7or8bit"
language: "python"
lang: "en"
category: "function"
name: "encode_7or8bit"
signature: "encode_7or8bit(msg)"
directive: "function"
module: "email.encoders"
source_url: "https://docs.python.org/3/library/email.encoders.html#email.encoders.encode_7or8bit"
license: "PSF"
updated: "2026-10-01"
---

# encode_7or8bit

This doesn't actually modify the message's payload, but it does set the
`Content-Transfer-Encoding` header to either `7bit` or `8bit` as
appropriate, based on the payload data.
