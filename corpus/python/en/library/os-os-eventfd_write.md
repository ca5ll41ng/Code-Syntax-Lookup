---
id: "python-en-function-os-eventfd_write"
language: "python"
lang: "en"
category: "function"
name: "eventfd_write"
signature: "eventfd_write(fd, value)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.eventfd_write"
license: "PSF"
updated: "2026-10-01"
---

# eventfd_write

Add value to an `eventfd` file descriptor. *value* must be a 64 bit
unsigned int. The function does not verify that *fd* is an `eventfd`.

availability:: Linux >= 2.6.27

> *Added in 3.10*
