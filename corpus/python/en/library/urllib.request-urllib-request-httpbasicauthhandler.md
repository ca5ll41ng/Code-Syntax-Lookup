---
id: "python-en-function-urllib-request-httpbasicauthhandler"
language: "python"
lang: "en"
category: "function"
name: "HTTPBasicAuthHandler"
signature: "HTTPBasicAuthHandler(password_mgr=None)"
directive: "class"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPBasicAuthHandler"
license: "PSF"
updated: "2026-10-01"
---

# HTTPBasicAuthHandler

Handle authentication with the remote host. *password_mgr*, if given, should
be something that is compatible with `HTTPPasswordMgr`; refer to
section `http-password-mgr` for information on the interface that must
be supported. HTTPBasicAuthHandler will raise a `ValueError` when
presented with a wrong Authentication scheme.
