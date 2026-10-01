---
id: "python-en-function-smtplib-smtp-verify"
language: "python"
lang: "en"
category: "function"
name: "SMTP.verify"
signature: "SMTP.verify(address)"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.verify"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.verify

Check the validity of an address on this server using SMTP `VRFY`. Returns a
tuple consisting of code 250 and a full RFC 822 address (including human
name) if the user address is valid. Otherwise returns an SMTP error code of 400
or greater and an error string.

> **Note**
>
> Many sites disable SMTP `VRFY` in order to foil spammers.
>
