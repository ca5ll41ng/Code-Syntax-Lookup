---
id: "python-en-function-urllib-request-passwd-is_authenticated-false"
language: "python"
lang: "en"
category: "function"
name: "passwd, is_authenticated=False)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.passwd, is_authenticated=False)"
license: "PSF"
updated: "2026-10-01"
---

# passwd, is_authenticated=False)

*realm*, *uri*, *user*, *passwd* are as for
`HTTPPasswordMgr.add_password`.  *is_authenticated* sets the initial
value of the `is_authenticated` flag for the given URI or list of URIs.
If *is_authenticated* is specified as `True`, *realm* is ignored.
