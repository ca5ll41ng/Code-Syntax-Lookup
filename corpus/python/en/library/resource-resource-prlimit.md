---
id: "python-en-function-resource-prlimit"
language: "python"
lang: "en"
category: "function"
name: "prlimit"
signature: "prlimit(pid, resource[, limits])"
directive: "function"
module: "resource"
source_url: "https://docs.python.org/3/library/resource.html#resource.prlimit"
license: "PSF"
updated: "2026-10-01"
---

# prlimit

Combines `setrlimit` and `getrlimit` in one function and
supports to get and set the resources limits of an arbitrary process. If
*pid* is 0, then the call applies to the current process. *resource* and
*limits* have the same meaning as in `setrlimit`, except that
*limits* is optional.

When *limits* is not given the function returns the *resource* limit of the
process *pid*. When *limits* is given the *resource* limit of the process is
set and the former resource limit is returned.

Raises `ProcessLookupError` when *pid* can't be found and
`PermissionError` when the user doesn't have `CAP_SYS_RESOURCE` for
the process.

audit-event:: resource.prlimit pid,resource,limits resource.prlimit

availability:: Linux >= 2.6.36 with glibc >= 2.13.

> *Added in 3.4*
