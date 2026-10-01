---
id: "python-en-function-urllib-request-httppasswordmgr-add_password"
language: "python"
lang: "en"
category: "function"
name: "HTTPPasswordMgr.add_password"
signature: "HTTPPasswordMgr.add_password(realm, uri, user, passwd)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPPasswordMgr.add_password"
license: "PSF"
updated: "2026-10-01"
---

# HTTPPasswordMgr.add_password

*uri* can be either a single URI, or a sequence of URIs. *realm*, *user* and
*passwd* must be strings. This causes `(user, passwd)` to be used as
authentication tokens when authentication for *realm* and a super-URI of any
of the given URIs is given. If a URI includes a scheme, its credentials only
match authentication URIs with the same scheme or no scheme. A URI without a
scheme matches authentication URIs with any scheme.

> *Changed in next*: Authentication credentials for URIs with a scheme are now scoped by that scheme.
