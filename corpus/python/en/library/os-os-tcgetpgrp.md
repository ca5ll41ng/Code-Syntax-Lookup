---
id: "python-en-function-os-tcgetpgrp"
language: "python"
lang: "en"
category: "function"
name: "tcgetpgrp"
signature: "tcgetpgrp(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.tcgetpgrp"
license: "PSF"
updated: "2026-10-01"
---

# tcgetpgrp

Return the process group associated with the terminal given by *fd* (an open
file descriptor as returned by `os.open`).

availability:: Unix, not WASI.
