---
id: "python-en-function-os-setpgrp"
language: "python"
lang: "en"
category: "function"
name: "setpgrp"
signature: "setpgrp()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.setpgrp"
license: "PSF"
updated: "2026-10-01"
---

# setpgrp

Call the system call :c`setpgrp` or `setpgrp(0, 0)` depending on
which version is implemented (if any).  See the Unix manual for the semantics.

availability:: Unix, not WASI.
