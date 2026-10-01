---
id: "python-en-function-os-efd_semaphore"
language: "python"
lang: "en"
category: "function"
name: "EFD_SEMAPHORE"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.EFD_SEMAPHORE"
license: "PSF"
updated: "2026-10-01"
---

# EFD_SEMAPHORE

Provide semaphore-like semantics for reads from an `eventfd` file
descriptor. On read the internal counter is decremented by one.

availability:: Linux >= 2.6.30

> *Added in 3.10*
