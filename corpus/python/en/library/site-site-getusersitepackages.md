---
id: "python-en-function-site-getusersitepackages"
language: "python"
lang: "en"
category: "function"
name: "getusersitepackages"
signature: "getusersitepackages()"
directive: "function"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.getusersitepackages"
license: "PSF"
updated: "2026-10-01"
---

# getusersitepackages

Return the path of the user-specific site-packages directory,
`USER_SITE`.  If it is not initialized yet, this function will also set
it, respecting `USER_BASE`.  To determine if the user-specific
site-packages was added to `sys.path` `ENABLE_USER_SITE` should be
used.

> *Added in 3.2*
