---
id: "python-en-function-urllib-request-httpdigestauthhandler"
language: "python"
lang: "en"
category: "function"
name: "HTTPDigestAuthHandler"
signature: "HTTPDigestAuthHandler(password_mgr=None)"
directive: "class"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPDigestAuthHandler"
license: "PSF"
updated: "2026-10-01"
---

# HTTPDigestAuthHandler

Handle authentication with the remote host. *password_mgr*, if given, should
be something that is compatible with `HTTPPasswordMgr`; refer to
section `http-password-mgr` for information on the interface that must
be supported. When both Digest Authentication Handler and Basic
Authentication Handler are both added, Digest Authentication is always tried
first. If the Digest Authentication returns a 40x response again, it is sent
to Basic Authentication handler to Handle.  This Handler method will raise a
`ValueError` when presented with an authentication scheme other than
Digest or Basic.

> *Changed in 3.3*: Raise :exc:`ValueError` on unsupported Authentication Scheme.
