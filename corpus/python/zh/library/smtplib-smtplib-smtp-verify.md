---
id: "python-zh-function-smtplib-smtp-verify"
language: "python"
lang: "zh"
category: "function"
name: "SMTP.verify"
signature: "SMTP.verify(address)"
directive: "method"
module: "smtplib"
source_url: "https://docs.python.org/zh-cn/3/library/smtplib.html#smtplib.SMTP.verify"
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
> 许多网站都禁用 SMTP ``VRFY`` 以阻止垃圾邮件。
>
