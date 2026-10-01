---
id: "python-en-function-os-rwf_hipri"
language: "python"
lang: "en"
category: "function"
name: "RWF_HIPRI"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.RWF_HIPRI"
license: "PSF"
updated: "2026-10-01"
---

# RWF_HIPRI

High priority read/write. Allows block-based filesystems to use polling
of the device, which provides lower latency, but may use additional
resources.

Currently, on Linux, this feature is usable only on a file descriptor opened
using the `O_DIRECT` flag.

availability:: Linux >= 4.6.

> *Added in 3.7*
