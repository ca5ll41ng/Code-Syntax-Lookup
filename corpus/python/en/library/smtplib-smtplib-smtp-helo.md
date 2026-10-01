---
id: "python-en-function-smtplib-smtp-helo"
language: "python"
lang: "en"
category: "function"
name: "SMTP.helo"
signature: "SMTP.helo(name='')"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.helo"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.helo

Identify yourself to the SMTP server using `HELO`.  The hostname argument
defaults to the fully qualified domain name of the local host.
The message returned by the server is stored as the `helo_resp` attribute
of the object.

In normal operation it should not be necessary to call this method explicitly.
It will be implicitly called by the `sendmail` when necessary.
