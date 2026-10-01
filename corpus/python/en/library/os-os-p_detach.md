---
id: "python-en-function-os-p_detach"
language: "python"
lang: "en"
category: "function"
name: "P_DETACH"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.P_DETACH"
license: "PSF"
updated: "2026-10-01"
---

# P_DETACH

Possible values for the *mode* parameter to the `spawn\*` family of
functions.  These are less portable than those listed above. `P_DETACH`
is similar to `P_NOWAIT`, but the new process is detached from the
console of the calling process. If `P_OVERLAY` is used, the current
process will be replaced; the `spawn\*` function will not return.

availability:: Windows.
