---
id: "python-en-function-os-setgroups"
language: "python"
lang: "en"
category: "function"
name: "setgroups"
signature: "setgroups(groups, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setgroups"
license: "PSF"
updated: "2026-10-01"
---

# setgroups

Set the list of supplemental group ids associated with the current process to
*groups*. *groups* must be a sequence, and each element must be an integer
identifying a group. This operation is typically available only to the superuser.

availability:: Unix, not WASI.

> **Note**
>
> system-defined maximum number of effective group ids, typically 16.
> See the documentation for `getgroups` for cases where it may not
> return the same group list set by calling setgroups().
>
