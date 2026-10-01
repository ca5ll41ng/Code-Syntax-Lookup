---
id: "python-en-function-http-cookies-morsel-output"
language: "python"
lang: "en"
category: "function"
name: "Morsel.output"
signature: "Morsel.output(attrs=None, header='Set-Cookie:')"
directive: "method"
module: "http.cookies"
source_url: "https://docs.python.org/3/library/http.cookies.html#http.cookies.Morsel.output"
license: "PSF"
updated: "2026-10-01"
---

# Morsel.output

Return a string representation of the Morsel, suitable to be sent as an HTTP
header. By default, all the attributes are included, unless *attrs* is given, in
which case it should be a list of attributes to use. *header* is by default
`"Set-Cookie:"`.
