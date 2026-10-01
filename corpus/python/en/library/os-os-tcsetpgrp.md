---
id: "python-en-function-os-tcsetpgrp"
language: "python"
lang: "en"
category: "function"
name: "tcsetpgrp"
signature: "tcsetpgrp(fd, pg, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.tcsetpgrp"
license: "PSF"
updated: "2026-10-01"
---

# tcsetpgrp

Set the process group associated with the terminal given by *fd* (an open file
descriptor as returned by `os.open`) to *pg*.

availability:: Unix, not WASI.
