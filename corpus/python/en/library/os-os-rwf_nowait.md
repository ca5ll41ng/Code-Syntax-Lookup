---
id: "python-en-function-os-rwf_nowait"
language: "python"
lang: "en"
category: "function"
name: "RWF_NOWAIT"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.RWF_NOWAIT"
license: "PSF"
updated: "2026-10-01"
---

# RWF_NOWAIT

Do not wait for data which is not immediately available. If this flag is
specified, the system call will return instantly if it would have to read
data from the backing storage or wait for a lock.

If some data was successfully read, it will return the number of bytes read.
If no bytes were read, it will return `-1` and set errno to
`errno.EAGAIN`.

availability:: Linux >= 4.14.

> *Added in 3.7*
