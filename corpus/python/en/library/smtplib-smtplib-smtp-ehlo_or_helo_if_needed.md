---
id: "python-en-function-smtplib-smtp-ehlo_or_helo_if_needed"
language: "python"
lang: "en"
category: "function"
name: "SMTP.ehlo_or_helo_if_needed"
signature: "SMTP.ehlo_or_helo_if_needed()"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/3/library/smtplib.html#smtplib.SMTP.ehlo_or_helo_if_needed"
license: "PSF"
updated: "2026-10-01"
---

# SMTP.ehlo_or_helo_if_needed

This method calls `ehlo` and/or `helo` if there has been no
previous `EHLO` or `HELO` command this session.  It tries ESMTP `EHLO`
first.

`SMTPHeloError`
  The server didn't reply properly to the `HELO` greeting.
