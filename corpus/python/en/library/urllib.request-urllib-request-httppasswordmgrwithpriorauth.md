---
id: "python-en-function-urllib-request-httppasswordmgrwithpriorauth"
language: "python"
lang: "en"
category: "function"
name: "HTTPPasswordMgrWithPriorAuth"
signature: "HTTPPasswordMgrWithPriorAuth()"
directive: "class"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPPasswordMgrWithPriorAuth"
license: "PSF"
updated: "2026-10-01"
---

# HTTPPasswordMgrWithPriorAuth

A variant of `HTTPPasswordMgrWithDefaultRealm` that also has a
database of `uri -> is_authenticated` mappings.  Can be used by a
BasicAuth handler to determine when to send authentication credentials
immediately instead of waiting for a `401` response first.

> *Added in 3.5*
