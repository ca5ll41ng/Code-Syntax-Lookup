---
id: "python-en-function-os-killpg"
language: "python"
lang: "en"
category: "function"
name: "killpg"
signature: "killpg(pgid, sig, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.killpg"
license: "PSF"
updated: "2026-10-01"
---

# killpg

Send the signal *sig* to the process group *pgid*.

audit-event:: os.killpg pgid,sig os.killpg

availability:: Unix, not WASI, not iOS.
