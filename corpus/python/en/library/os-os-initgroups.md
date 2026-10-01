---
id: "python-en-function-os-initgroups"
language: "python"
lang: "en"
category: "function"
name: "initgroups"
signature: "initgroups(username, gid, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.initgroups"
license: "PSF"
updated: "2026-10-01"
---

# initgroups

Call the system `initgroups()` to initialize the group access list with all of
the groups of which the specified username is a member, plus the specified
group id.

availability:: Unix, not WASI.

> *Added in 3.2*

> *Changed in 3.16*: Support for Android now exists.
