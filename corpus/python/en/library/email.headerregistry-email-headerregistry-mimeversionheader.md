---
id: "python-en-function-email-headerregistry-mimeversionheader"
language: "python"
lang: "en"
category: "function"
name: "MIMEVersionHeader"
directive: "class"
module: "email.headerregistry"
source_url: "https://docs.python.org/3/library/email.headerregistry.html#email.headerregistry.MIMEVersionHeader"
license: "PSF"
updated: "2026-10-01"
---

# MIMEVersionHeader

There is really only one valid value for the `MIME-Version`
header, and that is `1.0`.  For future proofing, this header class
supports other valid version numbers.  If a version number has a valid value
per RFC 2045, then the header object will have non-`None` values for
the following attributes:

attribute:: version

attribute:: major

attribute:: minor
