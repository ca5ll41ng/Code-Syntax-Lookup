---
id: "python-en-function-urllib-request-openerdirector-open"
language: "python"
lang: "en"
category: "function"
name: "OpenerDirector.open"
signature: "OpenerDirector.open(url, data=None[, timeout])"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.OpenerDirector.open"
license: "PSF"
updated: "2026-10-01"
---

# OpenerDirector.open

Open the given *url* (which can be a request object or a string), optionally
passing the given *data*. Arguments, return values and exceptions raised are
the same as those of `urlopen` (which simply calls the `open`
method on the currently installed global `OpenerDirector`).  The
optional *timeout* parameter specifies a timeout in seconds for blocking
operations like the connection attempt (if not specified, the global default
timeout setting will be used). The timeout feature actually works only for
HTTP, HTTPS and FTP connections.
