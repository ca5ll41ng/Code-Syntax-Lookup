---
id: "python-en-function-os-eventfd_read"
language: "python"
lang: "en"
category: "function"
name: "eventfd_read"
signature: "eventfd_read(fd)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.eventfd_read"
license: "PSF"
updated: "2026-10-01"
---

# eventfd_read

Read value from an `eventfd` file descriptor and return a 64 bit
unsigned int. The function does not verify that *fd* is an `eventfd`.

availability:: Linux >= 2.6.27

> *Added in 3.10*
