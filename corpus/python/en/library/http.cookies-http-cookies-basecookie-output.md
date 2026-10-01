---
id: "python-en-function-http-cookies-basecookie-output"
language: "python"
lang: "en"
category: "function"
name: "BaseCookie.output"
signature: "BaseCookie.output(attrs=None, header='Set-Cookie:', sep='\\r\\n')"
directive: "method"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.BaseCookie.output"
license: "PSF"
updated: "2026-10-01"
---

# BaseCookie.output

Return a string representation suitable to be sent as HTTP headers. *attrs* and
*header* are sent to each `Morsel`'s `~Morsel.output` method. *sep* is used
to join the headers together, and is by default the combination `'\r\n'`
(CRLF).
