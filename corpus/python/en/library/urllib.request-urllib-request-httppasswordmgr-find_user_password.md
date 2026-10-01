---
id: "python-en-function-urllib-request-httppasswordmgr-find_user_password"
language: "python"
lang: "en"
category: "function"
name: "HTTPPasswordMgr.find_user_password"
signature: "HTTPPasswordMgr.find_user_password(realm, authuri)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPPasswordMgr.find_user_password"
license: "PSF"
updated: "2026-10-01"
---

# HTTPPasswordMgr.find_user_password

Get user/password for given realm and URI, if any.  This method will return
`(None, None)` if there is no matching user/password.

For `HTTPPasswordMgrWithDefaultRealm` objects, the realm `None` will be
searched if the given *realm* has no matching user/password.
