---
id: "python-en-function-os-rwf_nosignal"
language: "python"
lang: "en"
category: "function"
name: "RWF_NOSIGNAL"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.RWF_NOSIGNAL"
license: "PSF"
updated: "2026-10-01"
---

# RWF_NOSIGNAL

Prevent pipe and socket writes from raising `~signal.SIGPIPE`.
This flag is meaningful only for `os.pwritev`.

availability:: Linux >= 6.18.

> *Added in 3.16*
