---
id: "python-en-function-site-enable_user_site"
language: "python"
lang: "en"
category: "function"
name: "ENABLE_USER_SITE"
directive: "data"
module: "site"
source_url: "https://docs.python.org/3/library/site.html#site.ENABLE_USER_SITE"
license: "PSF"
updated: "2026-10-01"
---

# ENABLE_USER_SITE

Flag showing the status of the user site-packages directory.  `True` means
that it is enabled and was added to `sys.path`.  `False` means that it
was disabled by user request (with `-s` or
`PYTHONNOUSERSITE`).  `None` means it was disabled for security
reasons (mismatch between user or group id and effective id) or by an
administrator.
