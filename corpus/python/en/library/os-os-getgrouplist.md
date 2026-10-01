---
id: "python-en-function-os-getgrouplist"
language: "python"
lang: "en"
category: "function"
name: "getgrouplist"
signature: "getgrouplist(user, group, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.getgrouplist"
license: "PSF"
updated: "2026-10-01"
---

# getgrouplist

Return list of group ids that *user* belongs to. If *group* is not in the
list, it is included; typically, *group* is specified as the group ID
field from the password record for *user*, because that group ID will
otherwise be potentially omitted.

availability:: Unix, not WASI.

> *Added in 3.3*
