---
id: "python-en-function-os-rwf_append"
language: "python"
lang: "en"
category: "function"
name: "RWF_APPEND"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.RWF_APPEND"
license: "PSF"
updated: "2026-10-01"
---

# RWF_APPEND

Provide a per-write equivalent of the `O_APPEND` `os.open`
flag. This flag is meaningful only for `os.pwritev`, and its
effect applies only to the data range written by the system call. The
*offset* argument does not affect the write operation; the data is always
appended to the end of the file. However, if the *offset* argument is
`-1`, the current file *offset* is updated.

availability:: Linux >= 4.16.

> *Added in 3.10*
